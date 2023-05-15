// @generated automatically by Diesel CLI.

diesel::table! {
    users (username) {
        email -> Text,
        username -> Text,
        password -> Text,
        telephone -> Text,
        groups -> Text,
        plans -> Text,
        photo -> Text,
    }
}
