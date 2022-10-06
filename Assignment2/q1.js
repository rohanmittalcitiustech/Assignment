function factorial(num){

    var fact=1;
    for(var i=num; i > 1; i--){
        fact *= i;
    }

    console.log(`Factorial for ${num} is ${fact}`);
}


factorial(3);
