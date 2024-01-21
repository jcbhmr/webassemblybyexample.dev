# "Hello WASI!" in Rust via JavaScript using @wasmer/sdk

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jcbhmr/webassemblybyexample.dev?quickstart=1&devcontainer_path=.devcontainer%2Fhello-wasip1-rs-js-wasmer-sdk%2Fdevcontainer.json)

We're going to compile some normal-looking Rust code to run in the browser using a WASI runtime. We're going to use the Wasmer SDK which provides a function called `runWasix()` that lets us run a WebAssembly module in a WASI environment.

Here's our Rust code:

<<< ./src/main.rs

Pretty normal right? Let's compile it to import all the WASI host functions that it needs:

```sh
cargo build --target wasm32-wasi
```

<details><summary><code>Cargo.toml</code></summary>

<<< ./Cargo.toml

</details>

🎗️ Make sure that you've installed the `wasm32-wasi` target for your Rust toolchain! If you're using rustup you can run `rustup target add wasm32-wasi` to add it.

Now that we have our `hello-wasip1.wasm` file lets write some JavaScript code to run it with those WASI imports that it needs. We aren't going to implement [the WASI API](https://wasix.org/docs/api-reference) ourselves. Instead, we're going to use the Wasmer SDK which provides a WASI-compatible runtime that we can interact with.

<details><summary><code>index.html</code></summary>

<<< ./index.html

</details>

<<< ./index.js

🎗️ Remember to run `npm install @wasmer/sdk` to install the npm package locally!

📚 The real magic ✨ here is with the `runWasix()` function and the `instance.wait()` promise. You can check out [the Wasmer SDK's documentation](https://wasmerio.github.io/wasmer-js/) for more information about the options that you can use to modify the behaviour of the WASI runtime.

Now you can run the code using `vite` to start a dev HTTP server and see the results:

![](https://i.imgur.com/voeSZqf.png)

Note that you'll need to add a `vite.config.js` or similar file like this in order to add [the required headers](https://web.dev/articles/coop-coep) to enable [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) which `runWasix()` uses.

🤩 Imagine what you can do now that you can compile CLI-like apps to WASI!

💡 For a next-level challenge see if you can run the same `hello-wasip1.wasm` app that we ran in the browser using a Python-based WASI WebAssembly runtime.
