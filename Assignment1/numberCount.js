function countDigits(N) {
    var result = 0;
    var count = Array(10).fill(0);
    while (N > 0) {
        var rem = N % 10;
        count[rem]++;
        N = Math.floor(N / 10);

    }
    for (var i = 0; i < 10; i++) {
        if (count[i] > 1) {
            result++
        }
    }
    return result;
}
var N = 7312140905;
console.log(countDigits(N));