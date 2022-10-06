var cit= 'CITIUSTECH';
var count= 0;
for(var i =0; i < cit.length; i++){
    if( cit[i] == 'A' || cit[i] == 'E' || cit[i] == 'I' || cit[i] == 'O' || cit[i] == 'U'){
        count++;
    }
}

console.log(count);