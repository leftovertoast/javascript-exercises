const leapYears = function(year) {

    let isDivBy400 = year % 400 === 0; 
    let isDivBy100 = year % 100 === 0; 
    let isDivBy4 = year % 4 === 0;

    if (isDivBy4 && !isDivBy100 || isDivBy400) {
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = leapYears;
