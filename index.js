var rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
var word = "pensi";
var keyboard = document.getElementById("keyboard");
var guesses = 1;
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
function addletter(letter) {
    for (var char = 1; char < 6; char++) {
        var space = document.getElementById("guess" + guesses + "char" + char);
        if (space.innerHTML == "&nbsp;") {
            space.innerHTML = letter.toUpperCase();
            break;
        }
    }
}
function rmvchar() {
    for (var char = 5; char > 0; char--) {
        var space = document.getElementById("guess" + guesses + "char" + char);
        if (!(space.innerHTML == "&nbsp;")) {
            space.innerHTML = "&nbsp;";
            break;
        }
    }
}
function addbutton(char, row) {
    var row_node = document.getElementById("row" + row);
    row_node.innerHTML += '<button id="' + char + '-key" class="key">' + char.toUpperCase() + "</button>";
}
function isvalid(word) {
    // function that checks whether word is an actual word or random bs 
    return true;
}
function check() {
    var spaces_filled = 0;
    var word_guessed = "";
    for (var i = 1; i < 6; i++) {
        var checker = document.getElementById("guess" + guesses + "char" + i);
        if (!(checker.innerHTML == "&nbsp;")) {
            spaces_filled += 1;
            word_guessed += checker.innerHTML;
        }
    }
    if (spaces_filled == 5 && isvalid(word_guessed)) {
        var checkword = word;
        for (var i = 1; i < 6; i++) {
            var checker = document.getElementById("guess" + guesses + "char" + i);
            var key = document.getElementById(checker.innerHTML.toLowerCase() + "-key");
            if (checker.innerHTML.toLowerCase() == word[i - 1]) {
                checker.classList.add("correct");
                key.classList.add("correct");
                checkword = checkword.replace(checker.innerHTML.toLowerCase(), "");
            }
            else if (word.includes(checker.innerHTML.toLowerCase())) {
                if (checkword.includes(checker.innerHTML.toLowerCase())) {
                    checker.classList.add("present");
                    key.classList.add("present");
                    checkword = checkword.replace(checker.innerHTML.toLocaleLowerCase(), "");
                }
            }
            else {
                key.classList.add("notpresent");
            }
        }
        guesses += 1;
    }
}
rows.forEach(function (element) {
    for (var i = 0; i < element.length; i++) {
        addbutton(element[i], (rows.indexOf(element) + 1).toString());
    }
});
rows.forEach(function (element) {
    var _loop_1 = function (i) {
        var btn = document.getElementById(element[i] + "-key");
        btn.addEventListener("click", function () {
            addletter(element[i]);
        });
    };
    for (var i = 0; i < element.length; i++) {
        _loop_1(i);
    }
});
var enter = document.getElementById("submit");
enter.addEventListener("click", function () {
    check();
});
var backspace = document.getElementById("backspace");
backspace.addEventListener("click", function () {
    rmvchar();
});
