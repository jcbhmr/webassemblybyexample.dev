<<< ./src/lib.rs [src/lib.rs]

<<< ./Cargo.toml

```sh
cargo build --target wasm32-unknown-unknown
```

<<< ./index.js

Build & serve this example with `make && make preview`. Then go to http://localhost:8000 and open the DevTools to see it run!

```
fib(10): 55
fib(15): 610
```
