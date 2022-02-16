const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
const word = "pensi"

var keyboard = document.getElementById("keyboard")
var guesses = 1

let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")

function addletter(letter) {
    // banayenge kal after meeting w medha yash divye 
    // i did not meet with medha yash divye because divye decided to not wake up
    for(let char=1; char<6; char++) {
        let space = document.getElementById("guess" + guesses + "char"+ char)
        if(space.innerText == "") {
            space.innerHTML += letter
            break
        }
    }
}

function rmvchar() {
    for(let char=5; char>0; char--) {
        let space = document.getElementById("guess" + guesses + "char"+ char)
        if(!(space.innerHTML == "")) {
            space.innerText = ""
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
    for(let i=1; i<6; i++) {
        let checker = document.getElementById("guess" + guesses + "char" + i)
        if(!(checker.innerHTML=="")) {
            spaces_filled +=1
        }
    }
    if(spaces_filled==5) {
        for(let i=1; i<6; i++) {
            let checker = document.getElementById("guess" + guesses + "char" + i)
            if(word.includes(checker.innerHTML)) {
                if(!(checker.innerHTML == word[i-1])) {
                    checker.classList.add("present")
                }
            }
            if(checker.innerHTML == word[i-1]) {
                checker.classList.add("correct")
            }
        }
        guesses +=1 
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