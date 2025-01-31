# Use Rust in JavaScript through wasm-pack

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jcbhmr/webassemblybyexample.dev?quickstart=1&devcontainer_path=.devcontainer%2Frs-js-wasm-pack%2Fdevcontainer.json)

[wasm-pack](https://rustwasm.github.io/wasm-pack/) is a great tool that automagically lifts and lowers complex structs, enums, strings, etc. back and forth across the WebAssembly boundary using [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) via the `#[wasm_bindgen]` macro. It also can generate a self-contained npm package that you can use directly or distribute via [npmjs.com](https://www.npmjs.com/).

This all means that you can write a library in Rust that can then be consumed by JavaScript using the magic of WebAssembly.

Let's get started by making sure that our `Cargo.toml` is configured correctly:

<<< ./Cargo.toml

ℹ `crate-type = ["cdylib"]` tells the Rust compiler to generate a dynamic library. In this case, that means a `.wasm` file without a start function.

📚 Read more on the [wasm-pack getting started guide](https://rustwasm.github.io/wasm-pack/book/tutorials/npm-browser-packages/getting-started.html)

**📖 Did you know?** `dep-name = "1.2.3"` in the Cargo world is equivalent to `"dep-name": "^1.2.3"` in the npm world. All version specifiers are `^` caret-ranged by default. You specify exact versions in `Cargo.toml` using `=1.2.3` instead.

Now that we have our Rust package configuration out of the way lets move on to the actual Rust code that we want to turn into WebAssembly:

<<< ./src/lib.rs

🕒 We're using the [chrono](https://crates.io/crates/chrono) Rust crate to do some time-related operations here.

Look at all those `#[wasm_bindgen]` macros! They're doing the heavy lifting here of transforming the `struct`, `impl` functions, and `fn` arguments & return value into WebAssembly pointers and back again. When you run `wasm-pack build` Cargo will compile the Rust code with all the juicy WebAssembly wrapper code generated by `#[wasm_bindgen]` and wasm-pack will also generate a nice `mylib.js` file that handles all the JavaScript-side conversions for you too! It even generates a reasonably good `.d.ts` file for TypeScript autocompletion.

Now is a good time to start thinking about the JavaScript side of this Rust & JavaScript story.

<<< ./index.js

<details><summary><code></code></summary>

<<< ./index.html

</details>

Now that we have our Rust code and our JavaScript code, lets run it to see it work:

![](https://i.imgur.com/R1iEwc4.png)

Look at that 🧙‍♂️ we're magically using some Rust-defined functions and `struct` objects from JavaScript! 😱 This is a very basic example. wasm-bindgen (the magic macro) also supports [callbacks](https://rustwasm.github.io/wasm-bindgen/reference/receiving-js-closures-in-rust.html), [constructors](https://rustwasm.github.io/wasm-bindgen/reference/attributes/on-rust-exports/constructor.html), [getters & setters](https://rustwasm.github.io/wasm-bindgen/reference/attributes/on-rust-exports/getter-and-setter.html), and more!
