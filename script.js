function game() {
    function clearCells() {
        $('.cell').text('');
    }

    function setMessage(message) {
        $('#messenger').text(message);
    };

    var setTurn = 'X';
    setMessage(setTurn + ' starts');


    $('.cell').click(function () {
        if (this.innerText === '' && !getWinner(setTurn)) {
            $(this).text(setTurn)
            switchTurn()
        }
    });

    function switchTurn() {

        if (getWinner(setTurn)) {
            setMessage(setTurn + " WIN!!!")
        } else if (setTurn === "X") {
            setTurn = "O"
            setMessage(setTurn + ' turn');
        } else {
            setTurn = "X"
            setMessage(setTurn + ' turn');
        }
    }


    function getWinner(move) {
        var result = false;
        if (getWinLine(1, 2, 3, move) ||
            getWinLine(4, 5, 6, move) ||
            getWinLine(7, 8, 9, move) ||
            getWinLine(1, 4, 7, move) ||
            getWinLine(2, 5, 8, move) ||
            getWinLine(3, 6, 9, move) ||
            getWinLine(1, 5, 9, move) ||
            getWinLine(3, 5, 7, move)) {
            result = true;
        }
        ;
        return result;
    }

    function getWinLine(a, b, c, move) {
        var result = false;
        if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
            result = true;
        }
        return result
    }
    function getBox(num) {
        return document.getElementById("c" + num).innerText;
    }
  clearCells();
}

game()
