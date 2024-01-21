build:
	wasm-pack build --target web

setup:
	rustup target add wasm32-unknown-unknown
	curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

preview:
	python -m http.server
