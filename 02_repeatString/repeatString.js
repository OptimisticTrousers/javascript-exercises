const repeatString = function(string, numOfTimesForStringRepetition) {

    if(numOfTimesForStringRepetition < 0){
        return "ERROR" 
    }
    else if(numOfTimesForStringRepetition == 0){
        return ''
    }
    else if(numOfTimesForStringRepetition == 1 ){
        return string;
    }

    return string + repeatString(string, numOfTimesForStringRepetition-1)
 
}

// Do not edit below this line
module.exports = repeatString;
