// var arr = ["hello", "world", "hi", "bye"];
// var min = Math.min(...arr.map(({ length }) => length));
// console.log(min);

// var arr = ["hello", "world", "hi", "bye"];
// var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
// console.log(min);

var raray = ["Angular", "ionic", "node", "js"];

function shortest_word(arry) {
    return arry.reduce(function(prevWord,currWord) {
        if (currWord.length > prevWord.length) {
            //console.log(currWord);
            return currWord
        }
        else {
            //console.log(prevWord);
            return prevWord;
        }
    })
}

console.log(shortest_word(raray));