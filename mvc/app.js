
function bin2Dec(bin) {

    var decimal = 0;
    for (var index = bin.length - 1; index >= 0; index--) {
        decimal += parseInt(bin[index]) * Math.pow(2, bin.length - 1 - index);
        
    }
    return decimal;

}

console.log(bin2Dec("1001"));
