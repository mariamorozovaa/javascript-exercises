const sumAll = function(start, end) {
    let sumOfAll = 0;

    if ((start < end) && (start >= 0) && (end >= 0) && (Number.isInteger(start)) && (Number.isInteger(end))) {
        for (i = start; i <= end; i++) {
            sumOfAll += i;
        }
    }

    else if ((start > end) && (start >= 0) && (end >= 0) && (Number.isInteger(start)) && (Number.isInteger(end))) {
        for (i = end; i <= start; i++) {
            sumOfAll += i;
        }
    }

    else {
        sumOfAll = 'ERROR';
    }
    
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
