---
# https://vitepress.dev/reference/frontmatter-config
titleTemplate: false
---

<b>WebAssembly by Example</b> is a hands-on introduction to WebAssembly using annotated example projects. Get started with [the fibonacci example](/fib-c-js/) or click on any of the links below. You are encouraged to copy-paste bits from these examples into your own projects as needed.

[WebAssembly](https://webassembly.org/) is a type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together.

### 🚩 Basics

- [Return 42 in WebAssembly Text Format via JavaScript](/42-wat-js/)
- [Fibonacci sequence in C via JavaScript](/fib-c-js/)
- [Fibonacci sequence in Rust via JavaScript](/fib-rs-js/)
- ["Hello world!" in C via JavaScript](/hello-world-c-js/)

### 👨‍💻 WASI

The [WebAssembly System Interface](https://wasi.dev/) (WASI) is a set of APIs for WASI being developed for eventual standardization by the WASI Subgroup, which is a subgroup of the WebAssembly Community Group.

- ["Hello WASI!" in Rust via JavaScript using @wasmer/sdk](/hello-wasip1-rs-js-wasmer-sdk/)
- ~~[Compile C++ to WASI preview1](#)~~

### 🧰 Specialized tooling

- [Use Rust in JavaScript through wasm-pack](/rs-js-wasm-pack/)
- ~~[Use C++ in JavaScript through Emscripten](#)~~
- ~~[Use Go in JavaScript through GOOS=js](#)~~
- ~~[Use AssemblyScript in JavaScript](#)~~

### 📦 WebAssembly component model

The [WebAssembly Component Model](https://github.com/WebAssembly/component-model) is a broad-reaching architecture for building interoperable Wasm libraries, applications, and environments.

- ~~[Create a WebAssembly component from Rust using cargo-component](#)~~
- ~~[Create a WebAssembly component from JavaScript using jco](#)~~
- ~~[Compose WebAssembly components using wasm-tools](#)~~
- ~~[Use a WebAssembly component in JavaScript through jco](#)~~
- ~~[Use a WebAssembly component in Python with wasmtime](#)~~
- ~~[Use a WebAssembly component in Rust with wasmtime](#)~~

### ⚙️ Advanced

- ~~[Compile Rust to WASIX](#)~~
- ~~[Run WASIX in JavaScript with Wasmer](#)~~
- ~~[Compile Rust to 64-bit WebAssembly](#)~~
- ~~[Use SDL2 in C++ in JavaScript through Emscripten](#)~~
- ~~[Run WASI preview1 on Arduino with Wasm3](#)~~
- ~~[Write an HTTP endpoint in Rust with Wasmer](#)~~

<hr style="margin-top: 2.3em;" />

<style scoped>
@media screen and (min-width: 600px) {
  .grr-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .grr {
    flex: 0 0 calc(50% - 20px); /* Adjust the width as needed */
    margin: 10px;
  }
}
</style>
