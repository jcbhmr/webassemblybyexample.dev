__attribute__((
    import_module("env"),
    import_name("print")
)) void print(char* message);

int main() {
    print("Hello world!");
    return 0;
}
