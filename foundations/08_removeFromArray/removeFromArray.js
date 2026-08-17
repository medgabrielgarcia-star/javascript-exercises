const removeFromArray = function(arr, ...arg) {
    for(let i = 0; i < arg.length; i++){
        while(arr.indexOf(arg[i]) != -1){
            let remove = arr.indexOf(arg[i]);
            arr.splice(remove, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
