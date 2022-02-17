const removeFromArray = function(array, ...removedElementsFromArray) {


    //return array.map(x, index => x == functionArgument.map().includes() ? array.splice(index, 1) : x)


    //finalArray.some((item, index) => functionArgument.includes(item) ? finalArray = finalArray.splice(index, 1) : [])


    for(let i = 0; i < array.length; i++){
console.log(i)

        if(removedElementsFromArray.includes(array[i])){
           array.splice(i, 1) 
    }

    }


    return array 


};

// Do not edit below this line
module.exports = removeFromArray;
