use super::schema::*;
use diesel::{r2d2::ConnectionManager, SqliteConnection};

// type alias to use in multiple places
pub type Pool = r2d2::Pool<ConnectionManager<SqliteConnection>>;

#[derive(Debug, Serialize, Deserialize, Queryable, Insertable)]
#[table_name = "users"]
pub struct User {
    pub email: String,
    pub username: String,
    pub password: String,
    pub telephone: String,
    pub groups:String,
    pub plans:String,
    pub photo:String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SlimUser {
    pub username: String,
    
}

impl From<User> for SlimUser {
    fn from(user: User) -> Self {
        SlimUser {
            username: user.username,
            
        }
    }
}


#[derive(Debug,Serialize,Deserialize)]
pub struct GetMe{
    pub username:String,
    pub email:String,
    pub photo:String
    
}

impl From<User> for GetMe {
    fn from(user: User) -> Self {
        GetMe {
            username: user.username,
            email:user.email,
            photo:user.photo
        }
    }
}




#[derive(Debug,Serialize,Deserialize)]
pub struct LoginUser {
    pub username:String,
    pub password:String,
}

impl From<User> for LoginUser{
    fn from(user:User)-> Self{
        LoginUser { username: user.username, password: user.password }
    }
}


#[derive(Debug,Serialize,Deserialize)]
pub struct RegisterUser{
    pub email: String,
    pub username: String,
    pub password: String,
}


impl From<User> for RegisterUser{
    fn from(user:User)->Self{
        RegisterUser { email: user.email, username: user.username, password: user.password }
    }
}



impl User{
    pub fn reg_user(info:RegisterUser)->Self{
        User { email: info.email, username: info.username, password: info.password, telephone:"".to_string(), groups:"".to_string(), plans:"".to_string(), photo:"".to_string() }
    }
    
}

#[derive(Debug, Serialize, Deserialize)]

pub struct ProfileData{
    pub email: String,
    pub username: String,
    
    pub telephone: String,
    pub groups:String,
    pub plans:String,
    pub photo:String,
}