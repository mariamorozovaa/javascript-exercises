const reverseString = function(str) {
    let splitStr = str.split('');
    let reverseStr = splitStr.reverse();
    let newStr = reverseStr.join('');
    
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
