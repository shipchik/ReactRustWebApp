use actix_web::{web,Responder,get};


#[get("/")]
async fn index() -> impl Responder {
    "Hello, World!"
}

#[get("/{name}")]
async fn hello(name: web::Path<String>) -> impl Responder {
    format!("Hello {}!", &name)
}





pub fn config(cfg: &mut web::ServiceConfig){
    cfg.service(index)
    .service(hello);
}