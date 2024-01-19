CC := clang-17

build:
	$(CC) \
		--target=wasm32 \
		-nostdlib \
		-Wl,--no-entry \
		-Wl,--export-all \
		-o hello_world.wasm \
		hello_world.c

preview:
	python -m http.server
