export class Node {
    
    constructor(data) {
        this.data = data;
        this.nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.head;
    }

    show() {
        this.output = "List: ";

        if (this.size() == 0) {
            return null;
        }

        if (this.size() == 1) {
            return this.head.data;
        }

        this.current = this.head;

        while (this.current) {
            this.output += `${this.current.data}, `;
            this.current = this.current.nextNode
        }
        this. output = this.output.slice(0, -2);

        return this.output;
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

    insert(data, index) {
        if (index == 0) {
            this.add(data);
        }

        if (index > 0) {
            this.new = new Node(data);

            this.current = this.head;
            this.pos = index;

            while (this.pos > 1) {
                this.current = this.node.nextNode;
                this.pos--;
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

    nodeAtIndex(index) {
        if (index == 0) {
            return this.head;
        }else {
            this.current = this.head;
            this.pos = 0;

            while (this.pos < index) {
                this.current = this.current.nextNode;
                this.pos++;
            }

            return this.current;
        }
    }

    read(index) {
        this.current = this.head;
        this.found = false;
        this.count = 0;

        while (this.current) {
            if (this.count != index) {
                this.current = this.current.nextNode;
                this.count++;
            }else {
                return this.current.data;
            }
        } 
        
        return null;
    }
}

let l = new LinkedList();