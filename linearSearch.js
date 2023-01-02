function linearSearch(array, target) {
    for(let i = 0; i < array.length; i++){
        if (array[i] === target) {
            return i;
        }
    }

    return null;
}

function verify(index){
    if (index != null) {
        console.log("Target found at index: ", index);
    }else{
        console.log("Target not found in list!");
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = linearSearch(numbers, 6);

verify(result);