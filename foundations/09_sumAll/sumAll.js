const sumAll = function(x, y) {
    if (x >= 0 && y >=0 
        && Number.isInteger(x) 
        && Number.isInteger(y)) {
            if (x > y) { 
            let sum = 0; 
            for (i = y; y <= x; y++) {
            sum += y;
            };
            return sum;
            } else if (y > x) {
            let sum = 0; 
            for (i = x; x <= y; x++) {
                sum += x;
            };
            return sum;
            };
        } else {
            return "ERROR";
        };
};
    
    

// Do not edit below this line
module.exports = sumAll;
