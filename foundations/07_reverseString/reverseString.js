const reverseString = function(str) {
    let string = str;
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return str;
};

// Do not edit below this line
module.exports = reverseString;
