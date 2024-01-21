use chrono::{Datelike, TimeZone, Utc};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Person {
    #[wasm_bindgen(getter_with_clone)]
    pub name: String,
    pub birth_date: i64, // Unix seconds
}

#[wasm_bindgen]
impl Person {
    pub fn compute_age(&self) -> i32 {
        let birth_date = Utc.timestamp_opt(self.birth_date, 0).unwrap();
        let current_date = Utc::now();
        current_date.year() - birth_date.year()
    }
}

#[wasm_bindgen]
pub fn create_alan_turing() -> Person {
    Person {
        name: String::from("Alan Turing"),
        birth_date: -1815328800, // June 23, 1912
    }
}
