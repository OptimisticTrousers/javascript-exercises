const sumAll = function(num1, num2) {

    largerNumber = 0
    smallerNumber = 0

    num1 > num2 ? largerNumber = num1 : smallerNumber = num1

    num2 > num1 ? largerNumber = num2 : smallerNumber = num2

    if(typeof num1 != 'number'| typeof num2 != 'number'){
        return "ERROR"
    }
    else if(num1 < 0 | num2 < 0){
        return "ERROR"

    }
    else if(num1 == num2){
        return num2 
    }

    return smallerNumber + sumAll(smallerNumber+1, largerNumber)

};

// Do not edit below this line
module.exports = sumAll;
