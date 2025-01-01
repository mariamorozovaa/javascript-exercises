const repeatString = function(string, num) {
    let newStr = '';
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            newStr += string;
        }    
    }
    else {
        newStr = 'ERROR';
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
