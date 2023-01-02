import { binarySearch, verify} from './binarySearch.js';

function mergeSort(list) {
    // sort list in ascending order
    // returns a new sorted list

    if (list.length <= 1) {
        return list;
    }

    let newList = split(list);
    let leftHalf = newList[0];
    let rightHalf = newList[1];

    let left = mergeSort(leftHalf);
    let right = mergeSort(rightHalf);

    let sortedList = merge(left, right);

    return sortedList;
}

function split(list) {
    let midpoint = Math.floor(list.length / 2);

    let left = list.slice(0, midpoint)
    let right = list.slice(midpoint);

    return [left, right];
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

function verifySorted(list) {
    let n = list.length;

    if (n == 0 || n == 1) {
        return true;
    }

    return list[0] <= list[1] && verifySorted(list.slice(1));
}

let aList = [];

for (let i = 0; i < 100; i++) {
    aList.push(Math.floor(Math.random() * 100));
}

let numbers = mergeSort(aList);
let result = binarySearch(numbers, 80);

console.log(verifySorted(numbers));
console.log(verify(result));
console.log(numbers);