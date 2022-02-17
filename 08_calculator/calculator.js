const add = function(...numbers) {
  
  let sum = 0

  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }

  return sum
  
};

const subtract = function(...numbers) {
  
  let subtraction = numbers[0] 

  for(let i = 1; i < numbers.length; i++){
    subtraction = subtraction - numbers[i]
  }

  return subtraction 
	
};

const sum = function(numbers) {
	
  let sum = 0

  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }

  return sum

};

const multiply = function(numbers) {

  let product = 0

  for(let i = 0; i < numbers.length; i++){
    product *= numbers[i]
  }

  return product 

};

const power = function(number, power) {

  return Math.pow(number, power)
	
};

const factorial = function(number) {

  if(number == 0){
    return 1
  }

  return number * factorial(number-1)
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
