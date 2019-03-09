window.time = 0
window.board = new Array(new Array(3), new Array(3), new Array(3))
for (let c = 0; c < 3; c++) {
    for (let k = 0; k < 3; k++) {
        window.board[c][k] = null
    }
}
const runGame = (id) => {
    let person = changeGameTime(id)
    let img_src = document.getElementById(id).src
    if (img_src.includes("blank")) {
        document.getElementById(id).src = person
    }
}

const changeGameTime = (id) => {
    let time = document.getElementById("time")
    let person = ""
    let x = id[1]
    let y = id[4]
    if (window.board[x][y] === null) {
        if (window.time % 2 == 0) {
            person = "xIcon.png"
            window.board[x][y] = "X"
        } else {
            person = "oIcon.png"
            window.board[x][y] = "O"
        }
    } else {
        return
    }
    console.clear()
    console.table(window.board)
    checkWin()
    if (person === "oIcon.png") {
        time.src = "xIcon.png";
    } else {
        time.src = "oIcon.png";
    }
    
    window.time++
    return person
}

const show_message_win = person => {
    alert(`[ ${person} ] won this round!`)
    location.reload()
}

const checkWin = _ => {
    let plays = window.board

    ////////// WINNING OF X PER LINE

    // 1st Line
    if (plays[0][0] === "X" && plays[0][1] === "X" && plays[0][2] === "X") {
        show_message_win("X")
    }

    // 2nd Line
    if (plays[1][0] === "X" && plays[1][1] === "X" && plays[1][2] === "X") {
        show_message_win("X")
    }

    // 3rd Line
    if (plays[2][0] === "X" && plays[2][1] === "X" && plays[2][2] === "X") {
        show_message_win("X")
    }

    ////////// WINNING OF O PER LINE

    // 1st Line
    if (plays[0][0] === "O" && plays[0][1] === "O" && plays[0][2] === "O") {
        show_message_win("O")
    }

    // 2nd Line
    if (plays[1][0] === "O" && plays[1][1] === "O" && plays[1][2] === "O") {
        show_message_win("O")
    }

    // 3rd Line
    if (plays[2][0] === "O" && plays[2][1] === "O" && plays[2][2] === "O") {
        show_message_win("O")
    }

    ////////// WINNING OF X PER COLUMN

    // 1st Line
    if (plays[0][0] === "X" && plays[1][0] === "X" && plays[2][0] === "X") {
        show_message_win("X")
    }

    // 2nd Line
    if (plays[0][1] === "X" && plays[1][1] === "X" && plays[2][1] === "X") {
        show_message_win("X")
    }

    // 3rd Line
    if (plays[0][2] === "X" && plays[1][2] === "X" && plays[2][2] === "X") {
        show_message_win("X")
    }

    ////////// WINNING OF O PER COLUMN

    // 1st Line
    if (plays[0][0] === "O" && plays[1][0] === "O" && plays[2][0] === "O") {
        show_message_win("O")
    }

    // 2nd Line
    if (plays[0][1] === "O" && plays[1][1] === "O" && plays[2][1] === "O") {
        show_message_win("O")
    }

    // 3rd Line
    if (plays[0][2] === "O" && plays[1][2] === "O" && plays[2][2] === "O") {
        show_message_win("O")
    }


    ////// WINNING OF X PER COLUMN

    if (plays[0][0] === "X" && plays[1][1] === "X" && plays[2][2] === "X") {
        show_message_win("X")
    }

    if (plays[0][2] === "X" && plays[1][1] === "X" && plays[2][0] === "X") {
        show_message_win("X")
    }

    ////// WINNING OF X PER COLUMN

    if (plays[0][0] === "O" && plays[1][1] === "O" && plays[2][2] === "O") {
        show_message_win("O")
    }

    if (plays[0][2] === "O" && plays[1][1] === "O" && plays[2][0] === "O") {
        show_message_win("O")
    }
}