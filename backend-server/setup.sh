sudo dnf install sqlite-devel

cargo install diesel_cli --no-default-features --features "sqlite-bundled"

diesel migration run

cargo install cargo-watch

cargo watch -x run