export function binarySearch(array, target) {
    let first = 0;
    let last = array.length - 1;
    let mid;

    while (first <= last) {
        mid = Math.round((first + last) / 2)

        if (array[mid] === target) {
            return mid;
        }else if(array[mid] < target) {
            first = mid + 1;
        }else {
            last = mid - 1;
        }
    }

    return null;
}

export function verify(index){
    if (index != null) {
        console.log("Target found at index: ", index);
    }else{
        console.log("Target not found in list!");
    }
}

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = binarySearch(numbers, 6);

// verify(result);