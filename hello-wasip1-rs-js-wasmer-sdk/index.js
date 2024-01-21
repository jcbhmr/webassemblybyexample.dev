// 1. Import and initialize the Wasmer SDK.
import { init, runWasix } from "@wasmer/sdk";
await init();

// 2. Load the binary contents of the WebAssembly file.
///   If you were in Node.js you'd use 'fs.readFile()'.
const response = await fetch("target/wasm32-wasi/debug/hello-wasip1.wasm");
const buffer = await response.arrayBuffer();

// 3. Compile the WebAssembly blob into a 'WebAssembly.Module'.
//    This will throw an error if the buffer isn't valid WebAssembly.
const module = await WebAssembly.compile(buffer);

// 4. Instantiate the module using the WASI wrapper.
const instance = await runWasix(module, {});

// 5. Wait for the program to run to completion.
const result = await instance.wait();
console.log({
  code: result.code,
  stdout: result.stdout,
  stderr: result.stderr,
});
