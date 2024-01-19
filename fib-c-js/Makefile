CC := clang-17

build:
	$(CC) \
		--target=wasm32 \
		-nostdlib \
		-Wl,--no-entry \
		-Wl,--export-all \
		-o fib.wasm \
		fib.c

preview:
	python -m http.server