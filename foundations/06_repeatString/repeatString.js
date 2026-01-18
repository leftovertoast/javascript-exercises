const repeatString = function(myString, num) {
        if (num < 0) {
            return "ERROR";
        } else if (num === 0) {
            return "";
        } else {
            let newString = ""
            for (let i = 0; i < num; i++) {
                newString += myString;
               };
            return newString;
        };
};

// Do not edit below this line
module.exports = repeatString;
