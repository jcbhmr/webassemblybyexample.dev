import init, { create_alan_turing, Person } from "./pkg/mylib.js";
await init();

const alanTuring = create_alan_turing();
console.log(alanTuring);
console.log(alanTuring.compute_age());
