const findTheOldest = function(objects) {

    const currentYear = new Date().getFullYear();

    //return objects.reduce((accumulator, currentValue) => {

        //let yearOfDeath = currentValue.yearOfDeath ? currentValue.yearOfDeath : currentYear;

        //accumulator.push(currentValue);
        
        //yearOfDeath - currentValue.yearOfBirth; 

        //return 

    //}, {})
    
    const sortedObjects = objects.sort((a,b) => {
        

        const personDeathA = a.yearOfDeath ? a.yearOfDeath : currentYear;

        const personDeathB = b.yearOfDeath ? b.yearOfDeath : currentYear;

        return (personDeathA - a.yearOfBirth) > (personDeathB - b.yearOfBirth) ? -1 : 1;

    })

    return sortedObjects[0];

};

// Do not edit below this line
module.exports = findTheOldest;
