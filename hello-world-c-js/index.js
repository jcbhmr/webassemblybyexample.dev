const responseP = fetch("hello_world.wasm");
const importObject = {};
const { instance } = await WebAssembly.instantiateStreaming(
  responseP,
  importObject
);
const { hello_world, memory } = instance.exports;

/**
 * Converts a C-string in memory into a native JavaScript string
 */
function liftString(memory, ptr) {
  // First we interpret the raw memory as bytes.
  const bytes = new Uint8Array(memory.buffer);

  // We scan through the string until we see a '\0' (null) char.
  let len = 0;
  while (bytes[ptr + len]) len++;

  // Then we get a 'Uint8Array' (excluding the '\0') of the string.
  const chars = bytes.subarray(ptr, ptr + len);

  // And finally we decode those UTF-8 characters into a JavaScript string.
  return new TextDecoder().decode(chars);
}

// This is a pointer like '1234'
const ptr = hello_world();
// Then we convert that pointer to a C-string into a JavaScript string.
const string = liftString(memory, ptr);
// Now we can say hi!
console.log("hello_world():", string);
