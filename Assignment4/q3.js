 const array =[1,2,3,4,5,6,7,8,9,10];

 var filterEven = array.filter(elements =(array) => {
        return array % 2 == 0;
 });

var filterPrime =  array.filter(elements = (array) => {
     return ((array % 1 == array) && (array % 2 != 0));
});


console.log(`Filtered Even numbers are as follows: ${filterEven}`);
console.log(`Filtered Prime numbers are as follows: ${filterPrime}`);


