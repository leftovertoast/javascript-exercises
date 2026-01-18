const removeFromArray = function(givenArray, ...selectedToRemove) {
    const newArray = [];

    givenArray.forEach((item) => {
        
        if (!selectedToRemove.includes(item)) {
            newArray.push(item);
        }
     });
     return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
