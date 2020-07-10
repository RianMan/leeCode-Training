// 合并两个有序链表
class Linklist{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(val){
        var cnode = {
            val,
            next:null
        };
        if(this.head === null){
            this.head = cnode;
        }else{
            //追加到节点
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = cnode;
        }
        this.length++;
    }
    
}
let l1 = new Linklist();
let l2 = new Linklist();
l1.append(1)
l1.append(2)
l1.append(4)

l2.append(1)
l2.append(3)
l2.append(4)

function ListNode(val) {
    let obj = {}
    ListNode.append = (val) => {
        const node = {
            val,
            next: null,
        };
        if(!obj.val){
            obj.val = val;
            obj.next = null;
        }else{
            obj.next = node;
        }
    }
}

ListNode.append(1)

var mergeTwoLists = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];
    const newList = new Linklist();
    function getArr(list,arr){
        if(!list) return;
        arr.push(list.val);
        if(list.next){
            getArr(list.next,arr)
        }else{
            return arr;
        }
    }
    getArr(l1,arr1);
    getArr(l2,arr2);
    let newArr = [...arr1,...arr2].sort((a,b) => a-b);
    newArr.forEach(val => newList.append(val));
    return newList.head;
};
console.log(mergeTwoLists(l1.head,l2.head));