/*
Write a function called 'checkWinner'. This function will take an array with a length of 7. Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).

Your function should accept this array as its only parameter.

If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'. If neither of these is the case, 'checkWinner' should return 'Draw!'.

Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "checkWinner".

let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'

*/

function checkWinner(arr) {
    var redStreak = 0;
    var blackStreak = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'black') {
            redStreak = 0;
            blackStreak += 1;
            if (blackStreak == 4) {
                return 'Black Wins!';
            }
        }
        if (arr[i] == 'red') {
            blackStreak = 0;
            redStreak += 1;
            if (redStreak == 4) {
                return 'Red Wins!'
            }
        }
        if (arr[i] == 0) {//we hit a 0
            blackStreak = 0;
            redStreak = 0;
        }
    }
    return 'Draw!';
}


let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner(['red', 'black', 'red', 'red', 'red', 'red', 'black']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'