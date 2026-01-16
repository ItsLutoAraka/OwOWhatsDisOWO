use axum::{Router, response::Redirect, routing::get};

#[tokio::main]
async fn main() {
    let app = Router::new().route(
        "/{*path}",
        get(|| async { Redirect::permanent("http://www.youtube.com/@LutoAraka") }),
    );
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
