const repeatString = function(word,j) {
    let i = 0;
    let repeatedWord = "";
    while (i < j){
        repeatedWord += word;
        i++;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
