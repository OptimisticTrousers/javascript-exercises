const fibonacci = function(numberSequence) {

    if(numberSequence == 1){
        return 1;
    }
    else if(numberSequence < 0){
        return "OOPS"
    }

    let array = [1, 1]; 

    let find = 0;

    //(1, 1, 2, 3)

    //if numberSequence == 3, 1 2 3

    //its going to push (1, )

    for(let i = 1; i <= numberSequence-1; i++){

        if(i === numberSequence-1){
            find = array[i];
        }

        previousValue = array[i-1];
        currentValue = array[i];

        array.push(previousValue + currentValue);
    }

    return find;
};

// Do not edit below this line
module.exports = fibonacci;
