build:
	wasm-tools parse answer.wat -o answer.wasm

setup:
	command -v cargo-binstall || curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
	cargo binstall wasm-tools -y

preview:
	python -m http.server
