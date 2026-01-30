const add = function(a, b) {
  return (a + b);	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(givenArray) {
  let summedUp = 0
  for (i = 0; i < givenArray.length; i++) {
      summedUp += givenArray[i];
  }
    return summedUp;
};

const multiply = function(givenArray) {
    let product = null
    for (i = 0; i < givenArray.length; i++) {
      if (product === null) {
        product = givenArray[i];
      } else {
      product = product * givenArray[i];
    }; 
  };
    return product;
};

const power = function(b, e) {
  let power = b
      for (i = 1; i < e; i++) {
        power = power * b;
      };
      return power;
};

const factorial = function(num) {  
  if (num === 0 || num === 1) {
    return 1;
  } else if (num === 2) {
    return 2;
  } else {
  let factor = 1;
  for (i = (num - 1); i >= 1; --i) {
    factor = factor + (factor * i);
  }; 
  return factor;
};
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
