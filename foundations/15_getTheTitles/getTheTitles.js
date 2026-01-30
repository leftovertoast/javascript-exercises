const getTheTitles = function(bookArray) {

    newArray = [];
   
    for (i = 0; i < bookArray.length; ++i) {
        newArray.push(bookArray[i].title);
    };
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
