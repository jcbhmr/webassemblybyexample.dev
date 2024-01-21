// 1. Load the binary contents of the WebAssembly file.
///   If you were in Node.js you'd use 'fs.readFile()'.
const response = await fetch("hello_world.wasm");
const buffer = await response.arrayBuffer();

// 2. Compile the WebAssembly blob into a 'WebAssembly.Module'.
//    This will throw an error if the buffer isn't valid WebAssembly.
const module = await WebAssembly.compile(buffer);

// 4. Define our host-defined 'print()' function that our C code will use. See
//    below for how we convert the C-string pointer into a JavaScript string.
function print(messagePointer) {
  const message = cStringPointerToString(messagePointer);
  console.log(message);
}

// 4. Instantiate the module with any imports. We need to pass our 'print()'
//    function here so that our WebAssembly can use it.
const importObject = {
  env: {
    print: print,
  },
};
const instance = await WebAssembly.instantiate(module, importObject);

// 5. Define a function to convert a C-string pointer into a JavaScript string.
function cStringPointerToString(pointer) {
  // A) First we interpret the raw memory as bytes.
  const { memory } = instance.exports;
  const bytes = new Uint8Array(memory.buffer);

  // B) We scan through the string until we see a '\0' (null) char.
  let length = 0;
  while (true) {
    if (bytes[pointer + length] === 0) {
      break;
    } else {
      length++;
    }
  }

  // C) Then we select just the string's contents.
  const chars = bytes.subarray(pointer, pointer + length);

  // D) And finally we decode those UTF-8 characters into a JavaScript string.
  return new TextDecoder().decode(chars);
}

// 6. Finally actually run the exported 'main()' function which does some logic
//    and calls the 'print()' function that we gave the WebAssembly module.
const { main } = instance.exports;
main();
