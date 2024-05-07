/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let firstNum = '';
    let secondNum = '';

    let loopLL = (ll, lstring) => {
        lstring = ll.val.toString() + lstring;
        if (ll.next != null) {
            lstring = loopLL(ll.next, lstring);
        }
        return lstring;
    }
    let linkedList = (val, next) => {
        return new ListNode(val, next)
    }

    let result  = BigInt(loopLL(l1, firstNum)) + BigInt(loopLL(l2, secondNum));
    result = result.toString();

    let next = null;
    for (let i= 0; i < result.length; i++) {
        next  = new ListNode(parseInt(result[i], 10), next);
    }
    return next;
};