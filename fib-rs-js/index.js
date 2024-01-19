const { module, instance } = await WebAssembly.instantiateStreaming(
  fetch("fib.wasm")
);
const { fib } = instance.exports;

console.log("fib(10):", fib(10));
console.log("fib(15):", fib(15));
