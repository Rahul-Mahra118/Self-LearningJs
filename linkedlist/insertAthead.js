class Node{
    constructor(data){
        this.data= data;
        this.next= null;
    }
}

let head=null;

function insertAtHead(head,data){
    //create a new Node
    let temp = new Node(10);
    temp.next=head;
    return temp;
}
head=insertAtHead(head,10);
//to print
let curr= head;

while(curr){
    console.log(curr.data);
    curr=curr.next;
}