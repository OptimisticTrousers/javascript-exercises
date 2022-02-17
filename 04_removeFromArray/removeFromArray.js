const removeFromArray = function(array, ...removedElementsFromArray) {

    //return array.map(x, index => x == functionArgument.map().includes() ? array.splice(index, 1) : x)

    let finalArray = array

    //finalArray.some((item, index) => functionArgument.includes(item) ? finalArray = finalArray.splice(index, 1) : [])


    for(let i = 0; i < array.length; i++){

        if(removedElementsFromArray.includes(array[i])){
           array.splice(i, 1) 
           i--
    }

    }


    return array 


};

// Do not edit below this line
module.exports = removeFromArray;
