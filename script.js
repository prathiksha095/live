let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");
let remaining = document.getElementById("remaining");
let warning = document.getElementById("warning");
let clearBtn = document.getElementById("clearBtn");

textInput.addEventListener("input", function () {
    let text = textInput.value;
    let characters = text.length;

    charCount.textContent = characters;

    let words = text.trim().split(/\s+/);

    if (text.trim() === "") {
        wordCount.textContent = 0;
    } else {
        wordCount.textContent = words.length;
    }

    let left = 100 - characters;
    remaining.textContent = left + " characters remaining";

    if (characters >= 90) {
        warning.textContent = "Warning! You are near the character limit.";
        charCount.style.color = "red";
    } else {
        warning.textContent = "";
        charCount.style.color = "#234c87";
    }

    if (characters === 100) {
        warning.textContent = "Character limit reached!";
    }
});

clearBtn.addEventListener("click", function () {
    textInput.value = "";
    charCount.textContent = 0;
    wordCount.textContent = 0;
    remaining.textContent = "100 characters remaining";
    warning.textContent = "";
    charCount.style.color = "#234c87";
});