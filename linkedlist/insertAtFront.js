class Node{
    constructor(data){
        this.data= data;
        this.next= null;
    }
}
//head & tail

let head= new Node(10);

function insertAtfront(head,data){
    //create a node before inserting
    let temp = new Node(data);
    temp.next=head;
    return temp;
}

let newNode=insertAtfront(head,20);
// let newNode2= insertAtfront(newNode,30)

// console.log(newNode2)