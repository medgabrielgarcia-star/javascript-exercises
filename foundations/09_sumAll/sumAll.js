const sumAll = function(min, max) {
    let result = 0;
    let inicio = Math.min(min, max);
    let final = Math.max(min, max);
    if(typeof min != "number" || typeof max != "number"){
        return "ERROR"
    } else if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR"
    } else if(min < 0 || max <0) {
        return "ERROR"
    } else {for(let i = inicio; i <= final; i++) {
        result+=i
    } return result }
}
// Do not edit below this line
module.exports = sumAll;
