function recursiveBinarySearch(array, target) {
    let midpoint;

    if (array.length < 0) {
        return false;
    }else {
        midpoint = Math.floor(array.length / 2);
    }

    if (array[midpoint] === target) {
        return true;
    }else if (array.length === 1) {
        return false;
    } else {
        if (array[midpoint] < target) {
            return recursiveBinarySearch(array.slice(midpoint + 1), target); 
        }else {
            return recursiveBinarySearch(array.slice(0, midpoint), target);
        }
    }
}

function verify(result){   
    console.log("Target found = ", result);   
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = recursiveBinarySearch(numbers, 3);
verify(result);

result = recursiveBinarySearch(numbers, 7);
verify(result);