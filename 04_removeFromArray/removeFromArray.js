const removeFromArray = function(arr, ...j) {
   let newArr = [];

   arr.forEach((item) => {
    if (!j.includes(item)){
        newArr.push(item);
    }
   })
   return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
