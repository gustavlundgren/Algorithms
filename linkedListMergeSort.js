import { Node, LinkedList } from './linkedList.js'

function linkedListMergeSort(linkedList) {
    if (linkedList.size() == 1) {
        return linkedList;
    }else if (linkedList.head == null) {
        return linkedList;
    }

    let newList = split(linkedList);
    let leftHalf = newList[0];
    let rightHalf = newList[1];

    let left = linkedListMergeSort(leftHalf);
    let right = linkedListMergeSort(rightHalf);

    let sorted = merge(left, right);

    return sorted;
}

function split(linkedList) {
    let leftHalf;
    let rightHalf;

    if (linkedList == null || linkedList.head == null) {
        leftHalf = linkedList;
        rightHalf = null;

        return [leftHalf, rightHalf]
    }else {
        let midpoint = Math.floor(linkedList.size() / 2) // round

        let midNode = linkedList.nodeAtIndex(midpoint - 1);

        leftHalf = linkedList;
        rightHalf = new LinkedList();
        rightHalf.head = midNode.nextNode;
        midNode.nextNode = null;
    }

    return [leftHalf, rightHalf];
}

function merge(left, right) {
    let merged = new LinkedList();

    merged.add(0);

    let current = merged.head;

    let leftHead = left.head;
    let rightHead = right.head;

    while (leftHead || rightHead) {
        if (leftHead == null) {
            current.nextNode = rightHead;
            rightHead = rightHead.nextNode;
        }else if (rightHead == null) {
            current.nextNode = leftHead;
            leftHead = leftHead.nextNode;
        }else {
            let leftData = leftHead.data;
            let rightData = rightHead.data;

            if (leftData < rightData) {
                current.nextNode = leftHead;
                leftHead = leftHead.nextNode;
            }else {
                current.nextNode = rightHead;
                rightHead = rightHead.nextNode;
            }
        }

        current = current.nextNode;
    }

    let head = merged.head.nextNode;
    merged.head = head;

    return merged;
}


let l = new LinkedList();

l.add(100);
l.add(208);
l.add(10);
l.add(7);
l.add(43);
l.add(19);


console.log(l.show());
let sortedList = linkedListMergeSort(l);
console.log(sortedList.show());