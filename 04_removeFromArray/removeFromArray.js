// const removeFromArray = function(arr, ...deleteElem) {
//     const newArr = [];

//     arr.forEach((elem) => {
//         if (!deleteElem.includes(elem)) {
//             newArr.push(elem);
//         }
//       });
//     return newArr;
// };


const removeFromArray = function(arr, ...deleteElem) {
    const newArr = [];

    for (i = 0; i <= arr.length - 1; i++) {
        if (!(deleteElem.includes(arr[i]))) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = removeFromArray;
