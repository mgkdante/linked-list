
import Node from "./node.js";

class LinkedList {
    count = 0;
    headNode = null;
    tailNode = null;

    append = (val) => {
        const newNode = new Node(val);
        if (this.count === 0) {
            this.headNode = newNode;
            this.tailNode = newNode;
        } else {
            this.tailNode.next = newNode;
            this.tailNode = newNode;
        }
        this.count += 1;
    };

    prepend = (val) => {
        const newNode = new Node(val);
        if (this.count === 0) {
            this.headNode = newNode;
            this.tailNode = newNode;
        } else {
            newNode.next = this.headNode;
            this.headNode = newNode;
        }
        this.count += 1;
    };

    size = () => {
        return this.count;
    };

    head = () => {
        return this.headNode;
    };

    tail = () => {
        return this.tailNode;
    };

    at = (index) => {
        if (index < 0 || index >= this.count) {
            return null;
        }
        let current = this.headNode;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    };

    pop = () => {
    };

    contains = (val) => {
    };

    toString = () => {
        let string = '';
        let current = this.headNode;
        while (current !== null) {
            string += current.val + ' -> ';
            current = current.next;
        }
        string += 'null';
        return string;
    };
}

export default LinkedList
