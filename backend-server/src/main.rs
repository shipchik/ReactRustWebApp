use actix_web::{get,web, App, HttpServer, Responder};

use serde::{Deserialize,Serialize};
use std::sync::Mutex;

mod todoList;

use todoList::services;

struct AppState{
    todolist_entries:Mutex<Vec<TodolistEntry>>,
}

#[derive(Deserialize,Serialize,Clone)]
struct TodolistEntry{
    id:i32,
    date:i32,
    title:String,
}


#[get("/")]
async fn index() -> String{
    "this is smt".to_string()
}


#[actix_web::main]
async fn main() ->std::io::Result<()>{
    let app_data =web::Data::new(AppState {
        todolist_entries: Mutex::new(vec![])
    });
    HttpServer::new(move || {
        App::new()
            .app_data(app_data.clone())
            .service(index)  
            .configure(services::config)
    })
    .bind(("127.0.0.1",8080))?
    .run()
    .await


    println!("dsfdfsd")

}