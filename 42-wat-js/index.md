# Return 42 in WebAssembly Text Format via JavaScript

<OpenInGitHubCodespacesButton slug="42-wat-js" />

To enable WebAssembly to be read and edited by humans, there is a textual representation of the Wasm binary format. This is an intermediate form designed to be exposed in text editors, browser developer tools, etc. This article explains how that text format works, in terms of the raw syntax, and how it is related to the underlying bytecode it represents — and the wrapper objects representing Wasm in JavaScript.

[📚 You can read more about the WebAssembly Text Format on MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format)

For instance, here's the WebAssembly Text Format code that exports a single function called `answer()` that returns the number `42`:

<<< ./answer.wat

To compile this text format into a binary `.wasm` file we can use [`wasm-tools parse`](https://github.com/bytecodealliance/wasm-tools#tools-included):

```sh
wasm-tools parse answer.wat -o answer.wasm
```

Tada! 🎉 Now we have an `answer.wasm` file which exports a single function called `answer()` which will return `42`. We can run that `answer.wasm` _anywhere_ in any WebAssembly runtime and it will work. We're going to use JavaScript in your browser to try it out:

<<< ./index.js

<sup>Yes, normally you'd use [`WebAssembly.instantiateStreaming()`](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static). This is for demo purposes.</sup>

<details><summary><code>index.html</code></summary>

<<< ./index.html

</details>

Now you can start your favorite dev HTTP server and open your browser to see the results! 🤩

![](https://i.imgur.com/fNzatBf.png)
