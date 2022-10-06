var nums= [2,3,69,71,34,17];
var maxOne= 0;
var maxSecond= 0;

for(var i =0; i < nums.length; i++ ){

if(maxOne < nums[i]){
    maxSecond= maxOne;
    maxOne = nums[i];
}
else if(maxSecond < nums[i]){
    maxSecond= nums[i];
}
}

window.alert("The biggest number is: " + maxOne + "\nThe Second biggest number is: " + maxSecond);
