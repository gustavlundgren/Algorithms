function heapify(arr, N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < N && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < N && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
  
        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}

function buildHeap(arr) {
    let N = arr.length;

    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
        heapify(arr, N, i);
    }
}

function printArray(arr)
{
    let N = arr.length;
    let output = "";

    for (var i = 0; i < N; ++i) {
        output += arr[i] + " ";
    }   

    console.log(output);

}
  
 // Driver's code
 let arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17, 89];
 let N = arr.length;
  
 // Function call
 buildHeap(arr)
  
 console.log( "Array representation of Heap is: ");
 printArray(arr, N);