var rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
var word = randWord();
console.log(word);
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
    var valid = isvalid(word_guessed);
    if (spaces_filled == 5) {
        if (guesses < 6) {
            if (valid) {
                var correct_count = 0;
                var checkword = word;
                for (var i = 1; i < 6; i++) {
                    var checker = document.getElementById("guess" + guesses + "char" + i);
                    var key = document.getElementById(checker.innerHTML.toLowerCase() + "-key");
                    if (checker.innerHTML.toLowerCase() == word[i - 1]) {
                        checker.classList.add("correct");
                        key.classList.add("correct");
                        checkword = checkword.replace(checker.innerHTML.toLowerCase(), "");
                        correct_count += 1;
                    }
                    else if (checkword.includes(checker.innerHTML.toLowerCase())) {
                        console.log(word_guessed);
                        checker.classList.add("present");
                        key.classList.add("present");
                        word_guessed = word_guessed.replace(checker.innerHTML.toLowerCase(), "");
                        checkword = checkword.replace(checker.innerHTML.toLowerCase(), "");
                    }
                    else {
                        if (!(key.classList.contains("present")) && !(key.classList.contains("correct"))) {
                            key.classList.add("notpresent");
                        }
                    }
                }
                if (correct_count == 5) {
                    document.getElementById("word").innerHTML = "The word was " + "<b>" + word + "</b>";
                    document.getElementById("winpopup").classList.remove("win");
                    document.getElementById("winpopup").classList.add("visible-win");
                }
                guesses += 1;
            }
            else {
                var popup_1 = document.getElementById("popup");
                popup_1.classList.add("popup");
                setTimeout(function () { popup_1.classList.remove("popup"); }, 2000);
            }
        }
        else {
            document.getElementById("loseword").innerHTML = "You lost....The word was " + "<b>" + word + "</b>";
            document.getElementById("losepopup").classList.remove("lose");
            document.getElementById("losepopup").classList.add("visible-lose");
        }
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
document.addEventListener("keydown", function (key) {
    var pressed = key["key"];
    if (pressed == "Enter") {
        check();
    }
    else if (pressed == "Backspace") {
        rmvchar();
    }
    else {
        rows.forEach(function (element) {
            if (element.includes(pressed.toLowerCase())) {
                addletter(pressed);
            }
        });
    }
});
