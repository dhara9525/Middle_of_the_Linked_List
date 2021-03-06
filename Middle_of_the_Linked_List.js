/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Runner technique 

var middleNode = function(head) {
    
    var fastnode = head;
    var slownode = head;
    while(fastnode !== null && fastnode.next !== null) 
    {
        fastnode = fastnode.next.next
        slownode = slownode.next
    }
    return slownode;
};
