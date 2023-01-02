function quickSort(array) {
    if (array.length == 0) {
        return array;
    }

    if (array.length <= 1) {
        return array;
    }

    let pivot = array[array.length -1];
    let leftHalf = [];
    let rightHalf = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            leftHalf.push(array[i]);
        }else {
            rightHalf.push(array[i]);
        }
    }

    let left = quickSort(leftHalf);
    let right = quickSort(rightHalf);

    let sorted = merge(left, right);

    return sorted;
}

function merge(left, right) {
    let l = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            l.push(left[i]);
            i++;
        } else {
            l.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        l.push(left[i]);
        i++;
    }

    while (j < right.length) {
        l.push(right[j]);
        j++;
    }

    return l;
}

let numbers = [12, 23, 9, 2];

console.log(quickSort(numbers));