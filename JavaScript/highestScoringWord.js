/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function highestScoringWord(string) {

    var arr = string.split(' ');
    var scores = {};
    var a = 'abcdefghijklmnopqrstuvwxyz'
    var curHighestScore = 0;
    var curHighestWord;
    for (var i = 0; i < a.length; i++) {
        scores[a[i]] = i + 1;
    }
    for (var i = 0; i < arr.length; i++) {
        var currentWordsScore = 0;
        for (var j = 0; j < arr[i].length; j++) {
            var key = arr[i][j].toLowerCase();
            currentWordsScore += scores[key];
        }
        if (curHighestWord === undefined || currentWordsScore > curHighestScore) {
            curHighestScore = currentWordsScore;
            curHighestWord = arr[i];
        }
    }
    return curHighestWord
}

s = 'Anderson nugget chicken bucket tool hello what memememe bebebe'

console.log(highestScoringWord(s));