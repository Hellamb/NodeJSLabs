import {List} from "./list.js";
import {ListNode} from "./list.js";
/**
 * Task: https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {List}
 */
const addTwoNumbers = function(l1, l2) {
    let digit = 10;
    let node1 = l1;
    let node2 = l2;
    let num1 = node1.value;
    let num2 = node2.value;

    while(node1.hasNext() || node2.hasNext()) {
        if(node1.hasNext()) {
            node1 = node1.next;
            num1 += node1.value * digit;
        }
        if(node2.hasNext()) {
            node2 = node2.next;
            num2 += node2.value * digit;
        }
        digit*=10;
    }

    const resultList = new List();
    const resultStr = (num1+num2) + '';
    const resultArr = resultStr.split('').reverse()
    resultArr.forEach(value => {
        resultList.add(value)
    })
    return resultList;
};

let number1 = new List();
number1.add(1)
number1.add(2)
let number2 = new List();

number2.add(3)
number2.add(4)
number2.add(5)

console.log(addTwoNumbers(number1.headNode, number2.headNode).toString());
