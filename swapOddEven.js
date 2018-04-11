/**
 * Takes a decimal number input.
 * Swaps even and odd places of its binary bits and returns the output in decimal again.
 * @param number
 * @returns {number}
 */
function swapOddEven(number) {

    var evenbits = (number & 0xAAAAAAAA) >> 1;

    var oddbits = (number & 0x55555555) << 1;

    return oddbits + evenbits;
}

console.log(swapOddEven(128));