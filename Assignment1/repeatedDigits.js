var number= 7312140905
function getDigit(number, i) {
     var digit = 0;
     var count = 0;
    var originalNum = number;

    while (count <= i) {
        if (count == i) {
            digit = number % 10;
        }
        number /= 10;
        count++;
    }
    if (i > numDigits(originalNum)) {
        return -1;
    } else {
        return digit;
    }
}