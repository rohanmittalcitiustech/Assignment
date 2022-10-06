const num=[2,3,4,5,6];

for(var i= 0; i < num.length; i++){
    var fact=1;
    for( var j=1; j <= num[i]; j++){
        fact *= [j];
    }
    console.log('Factorial for' + num[i] + " is = " + fact)
}