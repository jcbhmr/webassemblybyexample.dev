import {
  add,
  scream,
  alanTuring,
  adaLovelace,
  computeAge,
} from "./out/mylib.js";

console.log("1 + 2:", add(1, 2));
console.log("scream:", scream("Hello world!"));

const alan = alanTuring();
console.log("Alan Turing:", alan);

const ada = adaLovelace();
console.log("Ada Lovelace:", ada);
console.log("Ada's age:", computeAge(ada));
