fact = (num) => {
    var fact=1;
    for(var i=num; i > 1; i--){
        fact *= i;
    }

    console.log(fact);
}

fact(3);
