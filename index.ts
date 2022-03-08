const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
const word = randWord()
console.log(word)
var keyboard = document.getElementById("keyboard")
var guesses = 1

let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")

function addletter(letter) {
    for(let char=1; char<6; char++) {
        let space = document.getElementById("guess" + guesses + "char"+ char)
        if(space.innerHTML == "&nbsp;") {
            space.innerHTML= letter.toUpperCase()
            break
        }
    }
}

function rmvchar() {
    for(let char=5; char>0; char--) {
        let space = document.getElementById("guess" + guesses + "char"+ char)
        if(!(space.innerHTML == "&nbsp;")) {
            space.innerHTML = "&nbsp;"
            break
        }
    }
}

function addbutton(char, row) {
    let row_node = document.getElementById("row"+row)
    row_node.innerHTML += '<button id="' + char + '-key" class="key">' + char.toUpperCase() + "</button>"
}

function check() {
    let spaces_filled = 0
    let word_guessed = ""
    for(let i=1; i<6; i++) {
        let checker = document.getElementById("guess" + guesses + "char" + i)
        if(!(checker.innerHTML=="&nbsp;")) {
            spaces_filled +=1
            word_guessed += checker.innerHTML
        }
    }
    if(spaces_filled==5) {
        if (isvalid(word_guessed)) {
            let correct_count = 0
            let checkword = word
            for(let i=1; i<6; i++) {
                let checker = document.getElementById("guess" + guesses + "char" + i)
                let key = document.getElementById(checker.innerHTML.toLowerCase() + "-key")
                if(checker.innerHTML.toLowerCase() == word[i-1]) {
                    checker.classList.add("correct")
                    key.classList.add("correct")
                    checkword = checkword.replace(checker.innerHTML.toLowerCase(), "")
                    correct_count += 1 
                } else if(checkword.includes(checker.innerHTML.toLowerCase()) && word_guessed.toLowerCase().split(checker.innerHTML.toLowerCase()).length <= word.split(checker.innerHTML.toLowerCase()).length) {
                        console.log(word_guessed.split(checker.innerHTML.toLowerCase()))
                        console.log(word.split(checker.innerHTML.toLowerCase()))
                        checker.classList.add("present")
                        key.classList.add("present")
                        word_guessed = word_guessed.replace(checker.innerHTML.toLowerCase(), "")
                        checkword = checkword.replace(checker.innerHTML.toLowerCase(), "")
                } else {
                    key.classList.add("notpresent")
                }
            }
            if(correct_count == 5) {
                document.getElementById("winpopup").classList.add("win")
            }
            guesses +=1 
        } else {
            // add a class to the pop up div, then remove it in a second
            let popup = document.getElementById("popup")
            popup.classList.add("popup") 
            setTimeout(() => {popup.classList.remove("popup")}, 2000)
        }
    }
}

rows.forEach(element => {
    for(let i=0; i<element.length; i++) {
        addbutton(element[i], (rows.indexOf(element)+1).toString())
    }
});

rows.forEach(element => {
    for(let i=0; i<element.length; i++) {
        let btn = document.getElementById(element[i] + "-key")
        btn.addEventListener("click", function() {
            addletter(element[i])
        })
    }
});

let enter = document.getElementById("submit")
enter.addEventListener("click", function() {
    check()
})

let backspace = document.getElementById("backspace")
backspace.addEventListener("click", function() {
    rmvchar()
})