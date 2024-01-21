// 1. Load the binary contents of the WebAssembly file.
///   If you were in Node.js you'd use 'fs.readFile()'.
const response = await fetch("fib.wasm");
const buffer = await response.arrayBuffer();

// 2. Compile the WebAssembly blob into a 'WebAssembly.Module'.
//    This will throw an error if the buffer isn't valid WebAssembly.
const module = await WebAssembly.compile(buffer);

function print(pointer) {
  const string = getString(memory, pointer);
  console.log(string);
}

// 3. Instantiate the module with any imports. We need none.
//    Normally you'd pass in things like a 'println()' function.
const importObject = {};
const instance = await WebAssembly.instantiate(module, importObject);

// 4. Define a function to convert a C-string pointer into a JavaScript string.
function getString(memory, pointer) {
  // A) First we interpret the raw memory as bytes.
  const bytes = new Uint8Array(memory.buffer);

  // B) We scan through the string until we see a '\0' (null) char.
  let length = 0;
  while (true) {
    // The '\0' char.
    if (bytes[length] === 0) {
      break;
    } else {
      length++;
    }
  }

  // C) Then we select just that
  const chars = bytes.subarray(pointer, pointer + length);

  // D) And finally we decode those UTF-8 characters into a JavaScript string.
  return new TextDecoder().decode(chars);
}

// This is a pointer like '1234'
const pointer = hello_world();
console.log(pointer);

// Then we convert that pointer to a C-string into a JavaScript string.
const string = getString(memory, pointer);

// Now we can say hi!
console.log("hello_world():", string);
