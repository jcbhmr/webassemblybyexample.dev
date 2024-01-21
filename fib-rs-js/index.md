# Fibonacci sequence in Rust via JavaScript

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jcbhmr/webassemblybyexample.dev?quickstart=1&devcontainer_path=.devcontainer%2Ffib-rs-js%2Fdevcontainer.json)

We're going to compile some Rust code to WebAssembly and then run it in the browser! 🤩 Make sure that you have the `wasm32-unknown-unknown` target installed for your Rust toolchain. If you're using rustup you can use `rustup target add wasm32-unknown-unknown` to install the target.

Here's the `lib.rs` that we're going to compile into WebAssembly:

<<< ./src/lib.rs{1}

💡 Need a quick refreshed on Rust? Check out [Rust by Example](https://doc.rust-lang.org/rust-by-example/)!

❓ What happens if we omit the `#[no_mangle]` macro? Rust will treat the symbol as not exported and optimize it away leaving us with no `fib()` export to use from our JavaScript host. 😢

Now that we have our Rust code written, there's one setting we need to tweak in our `Cargo.toml` so that we can generate a WebAssembly module:

<<< ./Cargo.toml{7}

🎗️ Make sure that you set the `crate-type = ["cdylib"]` option! This is required for generating WebAssembly.

✨ You can quickly create a new Cargo Rust project using `cargo new`.

Now that you have the project set up you can build it using `cargo build`. Just make sure that you set the `--target` to `wasm32-unknown-unknown`! Otherwise you'll just end up with a `cdylib` library for your current operating system instead of a `fib.wasm` file. 😉

```sh
cargo build --target wasm32-unknown-unknown
```

Now that we have our `fib.wasm` file we can run it in the browser and call the `fib()` function to run that Fibonacci calculation in our WebAssembly code.

<details><summary><code>index.html</code></summary>

<<< ./index.html

</details>

🚀 Here's the JavaScript code that will be run via `index.html`:

<<< ./index.js

😉 We're deliberately not using the recommended [`WebAssembly.instantiateStreaming()`](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function so that you can see the steps individually.

ℹ Since we aren't using WASI or any other functionality from the outside world we don't need any imports in our `importObject`.

Now we can start up an HTTP server with `python -m http.server` or your other favorite static HTTP server and see the results:

![](https://i.imgur.com/p7J3AQY.png)
