var rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
var word = "pensi";
var keyboard = document.getElementById("keyboard");
var guesses = 1;
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
function addletter(letter) {
    // banayenge kal after meeting w medha yash divye 
    // i did not meet with medha yash divye because divye decided to not wake up
    for (var char = 1; char < 6; char++) {
        var space = document.getElementById("guess" + guesses + "char" + char);
        if (space.innerText == "") {
            space.innerHTML += letter;
            break;
        }
    }
}
function rmvchar() {
    for (var char = 5; char > 0; char--) {
        var space = document.getElementById("guess" + guesses + "char" + char);
        if (!(space.innerHTML == "")) {
            space.innerText = "";
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
    for (var i = 1; i < 6; i++) {
        var checker = document.getElementById("guess" + guesses + "char" + i);
        if (!(checker.innerHTML == "")) {
            spaces_filled += 1;
        }
    }
    if (spaces_filled == 5) {
        var checkword = word;
        for (var i = 1; i < 6; i++) {
            var checker = document.getElementById("guess" + guesses + "char" + i);
            if (checker.innerHTML == word[i - 1]) {
                checker.classList.add("correct");
                checkword = checkword.replace(checker.innerHTML, "");
            }
        }
        for (var i = 6; i < 6; i++) {
            var checker = document.getElementById("guess" + guesses + "char" + i);
            if (word.includes(checker.innerHTML) && checkword.includes(checker.innerHTML)) {
                if (!(checker.innerHTML == word[i - 1])) {
                    checker.classList.add("present");
                    checkword = checkword.replace(checker.innerHTML, "");
                }
                checkword = checkword.replace(checker.innerHTML, "");
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
