// 1. Load the binary contents of the WebAssembly file.
///   If you were in Node.js you'd use 'fs.readFile()'.
const response = await fetch("target/wasm32-unknown-unknown/debug/fib.wasm");
const buffer = await response.arrayBuffer();

// 2. Compile the WebAssembly blob into a 'WebAssembly.Module'.
//    This will throw an error if the buffer isn't valid WebAssembly.
const module = await WebAssembly.compile(buffer);

// 3. Instantiate the module with any imports. We need none.
//    Normally you'd pass in things like a 'println()' function.
const importObject = {};
const instance = await WebAssembly.instantiate(module, importObject);

// 4. Call the exported 'fib()' function!
const { fib } = instance.exports;
console.log("fib(10):", fib(10));
console.log("fib(15):", fib(15));
