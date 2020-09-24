// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length =0;
    }

    enqueue(value) {
        let newValue = new Node(value);
        if (this.length === 0) {
            this.front = newValue;
            this.back = newValue;
            this.length++;
        } else if (this.length === 1) {
            this.back = newValue;
            this.front.next = this.back;
            this.length++
        } else {
            this.back.next = newValue;
            this.back = newValue;
            this.length++
        }
        return this.length;
    }

    dequeue () {
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            let frontItem = this.front.value;
            this.front = null;
            this.back = null;
            this.length--;
            return frontItem;
        } else {
            let frontItem = this.front.value;
            this.front = this.front.next;
            this.length--;
            return frontItem;
        }

    }

    size () {
        return this.length;
    }

}

exports.Node = Node;
exports.Queue = Queue;