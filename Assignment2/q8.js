sum = (a = 0, b = 0, ...z) => {
    var sum = a + b;
    for (var i = 0; i < z.length; i++) {
        sum += z[i];
    }
    console.log(`Sum: ${sum}`);

}

sum();

