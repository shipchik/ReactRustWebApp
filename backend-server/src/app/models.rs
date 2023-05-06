
use diesel::prelude::*;
use crate::schema::users;



#[derive(Queryable)]
pub struct Users {
    pub id: i32,
    pub name:String,
    pub password:String
}


#[derive(Insertable)]
#[table_name = "users"]
pub struct NewUser<'a>{
    pub id:&'a i32,
    pub name: &'a String,
    pub password: &'a String
}