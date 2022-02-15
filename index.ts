const guessing_space = document.getElementById("")
const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

var keyboard = document.getElementById("keyboard")
var guesses = 0

let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")

function addletter(char) {
    // banayenge kal after meeting w medha yash divye 
    console.log("bajrang bali")
}

function addbutton(char, row) {
    let row_node = document.getElementById("row"+row)
    row_node.innerHTML += '<button id="' + char + '-key class="key">' + char.upper() + "</button>"

    let btn = document.getElementById(char + "-key")
    btn.addEventListener("click", function() {
        addletter(char)
    })
}

rows.forEach(element => {
    for(let i=0; i<element.length; i++) {
        addbutton(element[i], rows.indexOf(element).toString())
    }
})