export class ListNode {
    value
    next

    constructor(value) {
        this.value = value;
    }

    hasNext() {
        return this.next !== undefined
    }
}

export class List {
    headNode
    tailNode

    add(value) {
        let node = new ListNode(value);

        if (this.headNode === undefined) {
            this.headNode = node;
            this.tailNode = node
        } else {
            this.tailNode.next = node;
            this.tailNode = node;
        }
    }

    toString() {
        let str = '[';
        if (this.headNode === undefined) {
            return str + ']'
        }

        let node = this.headNode;
        str += node.value
        while (node.hasNext()) {
            str += ','
            node = node.next;
            str += node.value;
        }

        return str + ']'
    }
}