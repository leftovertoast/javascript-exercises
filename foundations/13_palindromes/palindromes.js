const palindromes = function (someString) {
    const cleanChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const newString = someString
    .toLowerCase()
    .split('')
    .filter((chars) => cleanChars.includes(chars))
    .join('');

    const reversedString = newString.split('').reverse().join('');

    return reversedString === newString;
};

// Do not edit below this line
module.exports = palindromes;
