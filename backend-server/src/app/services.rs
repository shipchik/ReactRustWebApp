use actix_web::{web,Responder,get,post};
use serde::{Deserialize};

#[derive(Deserialize)]
struct Users{
    id:i32,
    name:String,
    password:String
}



#[get("/")]
async fn index() -> impl Responder {
    "Hello, World!"
}



#[get("/ping")]
async fn ping() -> impl Responder{
    "pong!"
}


#[post("/user")]
async fn add_user(info:web::Json<Users>) ->String{
    println!("{}",info.name);
    format!("{}",info.name)

}




pub fn config(cfg: &mut web::ServiceConfig){
    cfg.service(index)
    .service(ping)
    .service(add_user);
}