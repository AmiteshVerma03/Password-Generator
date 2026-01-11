const lowercase = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const uppercase = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*',
    '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '|',
    ';', ':', "'", '"',
    ',', '.', '<', '>', '?',
    '/', '~', '`'
];
const merged = [...lowercase, ...numbers, ...symbols, ...uppercase];
let Generate = document.getElementById("generate");
let password1 = document.getElementById("first");
let password2 = document.getElementById("second");
let error = document.getElementById("err")
function create() {
    let text1 = "";
    let text2 = "";
    for (let i = 0; i < 10; i++) {
        text1 = text1 + merged[Math.floor(Math.random() * merged.length)];
        text2 = text2 + merged[Math.floor(Math.random() * merged.length)];
    }
    password1.textContent = text1;
    password2.textContent = text2;
    error.textContent="generated successfully!!"
}
async function copy1() {
    try {
        const text1 = password1.textContent;
        if (text1 === "password 1") {
            error.textContent = "Generate password first";
            return;
        }
        await navigator.clipboard.writeText(text1)
        error.textContent = "copied successfully!!"
    } catch (err) {
        error.textContent = "Unable to copy text";
    }
}
function copy2() {
    const text2 = password2.textContent;
    if (text2 === "password 2") {
        error.textContent = "Generate password first";
        return;
    }
    navigator.clipboard.writeText(text2)
    error.textContent = "copied successfully!!"
}
Generate.addEventListener("click", create);
password1.addEventListener("click", copy1);
password2.addEventListener("click", copy2);
