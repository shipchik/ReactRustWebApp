// @generated automatically by Diesel CLI.

diesel::table! {
    users (username) {
        email -> Varchar,
        username -> Varchar,
        password -> Varchar,
        telephone -> Varchar,
        groups -> Varchar,
        plans -> Varchar,
        photo -> Varchar,
    }
}
