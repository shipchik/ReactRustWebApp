use actix_identity::Identity;
use actix_web::Responder;
use actix_web::{error::BlockingError, web, HttpResponse};
use diesel::prelude::*;
use serde_json::json;

use crate::errors::ServiceError;
use crate::models::{GetMe, LoginUser, Pool, SlimUser, User, ProfileData};
use crate::utils::{hash, verify};
use futures::future::err;
use futures::future::Either;
use futures::Future;

extern crate dotenv;

use dotenv::dotenv;
use std::env;

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdatePassword {
    old_password: String,
    new_password: String,
}

pub fn update_password(
    auth_data: web::Json<UpdatePassword>,
    id: Identity,
    pool: web::Data<Pool>,
) -> impl Future<Item = HttpResponse, Error = ServiceError> {
    match id.identity().as_ref() {
        Some(identity) => {
            let user: SlimUser = serde_json::from_str(&identity).unwrap();
            id.forget();
            Either::A(
                web::block(move || query_update(user, auth_data.into_inner(), pool)).then(
                    move |res: Result<SlimUser, BlockingError<ServiceError>>| match res {
                        Ok(user) => {
                            let user_string = serde_json::to_string(&user).unwrap();
                            id.remember(user_string);
                            Ok(HttpResponse::Ok().finish())
                        }
                        Err(err) => match err {
                            BlockingError::Error(service_error) => Err(service_error),
                            BlockingError::Canceled => Err(ServiceError::InternalServerError),
                        },
                    },
                ),
            )
        }
        _ => Either::B(err(ServiceError::Unauthorized)),
    }
}

pub fn logout(id: Identity) -> HttpResponse {
    id.forget();
    HttpResponse::Ok().finish()
}

pub fn login(
    auth_data: web::Json<LoginUser>,
    id: Identity,
    pool: web::Data<Pool>,
) -> impl Future<Item = HttpResponse, Error = ServiceError> {
    web::block(move || query(auth_data.into_inner(), pool)).then(
        move |res: Result<SlimUser, BlockingError<ServiceError>>| match res {
            Ok(user) => {
                let user_string = serde_json::to_string(&user).unwrap();
                id.remember(user_string);

                Ok(HttpResponse::Ok().finish())
            }
            Err(err) => match err {
                BlockingError::Error(service_error) => Err(service_error),
                BlockingError::Canceled => Err(ServiceError::InternalServerError),
            },
        },
    )
}

pub fn me(
    id: Identity,
    pool: web::Data<Pool>,
) -> impl Future<Item = HttpResponse, Error = ServiceError> {
    match id.identity().as_ref() {
        Some(identity) => {
            println!("{}", identity);
            let user: SlimUser = serde_json::from_str(&identity).unwrap();
            Either::A(web::block(move || get_me(user, pool)).then(
                move |res: Result<GetMe, BlockingError<ServiceError>>| match res {
                    Ok(user) => Ok(HttpResponse::Ok().json(user)),
                    Err(err) => match err {
                        BlockingError::Error(service_error) => Err(service_error),
                        BlockingError::Canceled => Err(ServiceError::InternalServerError),
                    },
                },
            ))
        }
        _ => Either::B(err(ServiceError::Unauthorized)),
    }
}

fn get_me(data: SlimUser, pool: web::Data<Pool>) -> Result<GetMe, ServiceError> {
    use crate::schema::users::dsl::{username, users};
    let conn: &SqliteConnection = &pool.get().unwrap();
    let mut items = users
        .filter(username.eq(data.username))
        .load::<User>(conn)?;

    if let Some(user) = items.pop() {
        dotenv::dotenv().ok();
        let img = |img_url: String| -> String {
            if img_url == "".to_string() {
                return "0".to_string();
            } else {
                return format!(
                    "{}profiles_img/{}",
                    env::var("BASE_URL").unwrap_or_else(|_| "http://localhost:8000/".to_string()),
                    img_url
                );
            }
        };

        let slim_user = GetMe {
            username: user.username,
            email: user.email,
            photo: img(user.photo),
        };

        return Ok(slim_user);
    }
    Err(ServiceError::Unauthorized)
}

/// Diesel query
fn query(auth_data: LoginUser, pool: web::Data<Pool>) -> Result<SlimUser, ServiceError> {
    use crate::schema::users::dsl::{username, users};
    let conn: &SqliteConnection = &pool.get().unwrap();
    let mut items = users
        .filter(username.eq(&auth_data.username))
        .load::<User>(conn)?;

    if let Some(user) = items.pop() {
        if let Ok(matching) = verify(&user.password, &auth_data.password) {
            if matching {
                let slim_user = SlimUser {
                    username: user.username,
                };
                return Ok(slim_user);
            }
        }
    }
    Err(ServiceError::Unauthorized)
}

fn query_update(
    auth_data: SlimUser,
    upwd: UpdatePassword,
    pool: web::Data<Pool>,
) -> Result<SlimUser, ServiceError> {
    use crate::schema::users::dsl::{password, username, users};
    let conn: &SqliteConnection = &pool.get().unwrap();
    let mut items = users
        .filter(username.eq(&auth_data.username))
        .load::<User>(conn)?;

    if let Some(user) = items.pop() {
        if let Ok(matching) = verify(&user.password, &upwd.old_password) {
            if matching {
                let hash_password: String = hash(&upwd.new_password)?;
                let _ = diesel::update(users.find(&auth_data.username))
                    .set(password.eq(hash_password))
                    .execute(conn)?;
                let slim_user = SlimUser {
                    username: user.username,
                };
                return Ok(slim_user);
            }
        }
    }
    Err(ServiceError::BadRequest("Username not exist !".into()))
}




pub fn user_profile(
    id: Identity,
    pool: web::Data<Pool>,
)-> impl Future<Item = HttpResponse, Error = ServiceError> {
    match id.identity().as_ref() {
        Some(identity) => {
            println!("{}", identity);
            let user: SlimUser = serde_json::from_str(&identity).unwrap();
            Either::A(web::block(move || get_profile_data(user, pool)).then(
                move |res: Result<ProfileData, BlockingError<ServiceError>>| match res {
                    Ok(user) => Ok(HttpResponse::Ok().json(user)),
                    Err(err) => match err {
                        BlockingError::Error(service_error) => Err(service_error),
                        BlockingError::Canceled => Err(ServiceError::InternalServerError),
                    },
                },
            ))
        }
        _ => Either::B(err(ServiceError::Unauthorized)),
    }

}


fn get_profile_data(data:SlimUser,pool: web::Data<Pool>) -> Result<ProfileData, ServiceError>{
    use crate::schema::users::dsl::{username, users};
    let conn: &SqliteConnection = &pool.get().unwrap();
    let mut items = users
        .filter(username.eq(data.username))
        .load::<User>(conn)?;

    if let Some(user) = items.pop() {
        dotenv::dotenv().ok();
        let img = |img_url: String| -> String {
            if img_url == "".to_string() {
                return "0".to_string();
            } else {
                return format!(
                    "{}profiles_img/{}",
                    env::var("BASE_URL").unwrap_or_else(|_| "http://localhost:8000/".to_string()),
                    img_url
                );
            }
        };
    
        let slim_user = ProfileData {
            username: user.username,
            email: user.email,
            photo: img(user.photo),
            telephone: user.telephone,
            groups: user.groups,
            plans:user.plans
        };

        return Ok(slim_user);
    }
    Err(ServiceError::Unauthorized)
    }
