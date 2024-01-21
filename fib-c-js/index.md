# Fibonacci sequence in C via JavaScript

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jcbhmr/webassemblybyexample.dev?quickstart=1&devcontainer_path=.devcontainer%2Ffib-c-js%2Fdevcontainer.json)

We're going to compile C to WebAssembly with minimal imports (no [WASI](https://wasi.dev/)) using Clang and then run it in your browser. How cool is that? 🤩

First we need to create the `fib.c` file which will contain the code that we want to turn into WebAssembly. 🛑 Since we're using `-nostdlib` we need to make sure that the code doesn't use `#include <stdio.h>` or similar.

<<< ./fib.c

💡 Need a quick refresher of C? Check out [C by Example](https://www.cbyexample.com/)!

To compile C, normally you run something like `cc main.c -o main` and then `./main`. Instead we're going to add a few flags to make our C compiler (Clang in this example) generate WebAssembly. ✨

```sh
clang-17 \
    --target=wasm32 \
    -nostdlib \
    -Wl,--no-entry \
    -Wl,--export-all \
    -o fib.wasm \
    fib.c
```

🆕 Make sure you have a relatively modern version of Clang. You can [download LLVM](https://releases.llvm.org/download.html) if you need a newer version.

Here's a quick explainer of the flags:

- We want to target WebAssembly instead of Linux ARM64 or Windows x86. This means we need to add the `--target=wasm32` flag.

- We **don't** want to use the C standard library because [that's a bit more complicated](#TODO). Hence the `-nostdlib` flag.

- We have no `main()` function so we don't want our C compiler to error when it can't find `main()`. That's the `-Wl,--no-entry`.

- We want to make sure our `fib()` function is public. That's where `-Wl,--export-all` comes in. There are other ways to export specific symbols but this is just easier. 🤷‍♀️

📚 Check out [Compiling C to WebAssembly without Emscripten](https://surma.dev/things/c-to-webassembly/) for more details on how the whole C to WebAssembly toolchain works.

Now that we have our `fib.wasm` file that our C compiler gave us, we have to actually _use_ it. One of the easiest ways to do that is through the builtin WebAssembly interpreter in your browser. All you need is an HTML file, some JavaScript code, and a static HTTP server! 🚀

<details><summary><code>index.html</code></summary>

<<< ./index.html

</details>

<<< ./index.js

😉 We're deliberately not using the recommended [`WebAssembly.instantiateStreaming()`](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function so that you can see the steps individually.

ℹ Since we aren't using WASI or any other functionality from the outside world we don't need any imports in our `importObject`.

Now we can start up an HTTP server with `python -m http.server` or your other favorite static HTTP server and see the results:

![](https://i.imgur.com/4dQ8Zdm.png)
