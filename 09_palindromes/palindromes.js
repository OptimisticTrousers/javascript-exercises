const palindromes = function (string) {

    const regex = /[A-Za-z]/gi
    
    let unreversedArray = string.toLowerCase().match(regex)

    let stringArray = string.split('').reverse().join('').toLowerCase()

    let noPunctuation = stringArray.match(regex)

    if(noPunctuation.join('') == unreversedArray.join('')){
        return true
    }

    return false
};

// Do not edit below this line
module.exports = palindromes;
