function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j=0; j < (arr.length - i-1); j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
    }
    console.log(arr);
}

var arr1 = [3745,7,12,90,53];

bubbleSort(arr1);
