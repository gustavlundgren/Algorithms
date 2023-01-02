class Node {
    
    constructor(data) {
        this.data = data;
        this.nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head;
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        }else {
            return false;
        }
    }

    size() {
        this.current = this.head;
        this.count = 0

        while(this.current) {
            this.count++;
            this.current = this.current.nextNode;
        }

        return this.count;
    }

    add(data) {
        this.node = new Node(data);
        this.node.nextNode = this.head;
        this.head = this.node;
    }

    search(key) {
        this.current = this.head

        while (this.current) {
            if (this.current.data == key) {
                return this.current;
            }else {
                this.current = this.current.nextNode;
            }
        }

        return null;
    }

    insert(data, pos) {
        if (pos == 0) {
            this.add(data);
        }

        if (pos > 0) {
            this.new = new Node(data);

            this.current = this.head;
            this.index = pos;

            while (this.index > 1) {
                this.current = this.node.nextNode;
                this.index--;
            }

            this.prevNode = this.current;
            this.nextNode = this.current.nextNode;

            this.prevNode.nextNode = this.new;
            this.new.nextNode = this.nextNode;
        }
    }

    remove(key) {
        this.current = this.head;
        this.prevNode = null;
        this.found = false;

        while (this.current && !this.found) {
            if (this.current.data === key && this.current === this.head) {
                this.found = true;
                this.head = this.current.nextNode;
            }else if (this.current.data === key) {
                this.found = true;
                this.prevNode.nextNode = this.current.nextNode;
            }else {
                this.prevNode = this.current;
                this.current = this.current.nextNode;
            }
        }

        return this.current;
    }

    read(pos) {
        this.current = this.head;
        this.found = false;
        this.count = 0;

        while (this.current && !this.found) {
            if (this.count != pos) {
                this.current = this.current.nextNode;
                this.count++;
            }else {
                this.found = true;
            }
        }

        return this.current.data;
    }
}

let l = new LinkedList();

l.add(3);
l.add(7);
l.add(11);
l.insert(24, 1);

console.log(l.read(1));
console.log(l.size());