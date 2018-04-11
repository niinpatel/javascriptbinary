/**
 * Takes decimal number input and returns its binary in the form of string.
 * @param number
 * @returns {string}
 */
function binary(number) {

    var totalBits = Math.floor(Math.log2(number) + 1);

    var binaryNumber = "";

    for(i = 0; i < totalBits; i++){
        var ithBit = ((number & (Math.pow(2,i))) === 0)? 0:1;
        binaryNumber = ithBit + binaryNumber;
    }

    return binaryNumber;
}

console.log(binary(43));

