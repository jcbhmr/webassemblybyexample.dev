# "Hello world!" in C via JavaScript

<OpenInGitHubCodespacesButton slug="hello-world-c-js" />

After passing some numbers to-and-fro between JavaScript and WebAssembly it's time to take things to the next level in two ways: importing host functions in your WebAssembly code and passing more complex data (strings!) back-and-forth with your WebAssembly module. 😵

First, let's see what our C file looks like:

<<< ./hello_world.c{1-4}

😱 We're **importing host functionality** to print something! The `print()` function that we are using here must be defined in our JavaScript code that instantiates this WebAssembly module. The fancy `__attribute__()` stuff here is [a Clang-specific trick](https://lld.llvm.org/WebAssembly.html#imports).

Before we get around to writing our JavaScript code to use the `.wasm` file we need to compile it. This compilation command is identical to the one used in the [Fibonacci sequence in C via JavaScript](/fib-c-js/) example:

```sh
clang-17 \
  --target=wasm32 \
  -nostdlib \
  -Wl,--no-entry \
  -Wl,--export-all \
  -o hello_world.wasm \
  hello_world.c
```

Now that we have our `hello_world.wasm` file lets write some JavaScript to provide it with the `print()` function and then run it! 🚀

<<< ./index.js

<details><summary><code>index.html</code></summary>

<<< ./index.html

</details>

Now we can start up an HTTP server with `python -m http.server` or your other favorite static HTTP server and see the results:

![](https://i.imgur.com/NGdhMdz.png)
