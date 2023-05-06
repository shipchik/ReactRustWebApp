use actix_web::{get, web, App, HttpServer};

mod app;


use app::services;




#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("hello");
    HttpServer::new(|| App::new()
    .configure(services::config))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
    
}