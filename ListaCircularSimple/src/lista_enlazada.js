import Node from "./nodo.js";

export default // Clase LinkedList
class SCLinkedList {
  constructor() {
    this.head = null;

  }

  scInsert(data){
    let newnode = new Node(data)

    if(this.head===null){             //
      this.head = newnode             //
      newnode.next = this.head        //
    }else if (this.head!==null){
      newnode.next = this.head
      var temp = this.head

    while (temp.next !== this.head){
      temp=temp.next
    }

    temp.next=newnode
  }
}

printList() {
  let temp = this.head;
  let values = 'O-> ';
  
  do{
          values += temp.data + '-> ';
          temp = temp.next;
      }while(temp !== this.head);

  console.log(values + 'O')
}
/* Old Methods
  scInsert(data){
    let newnode = new Node(data)

    if(this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      newnode.prev = this.tail;
      this.tail = newnode;
    }

    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
  printList() {
    let temp = this.head;
    let values = '';
    
    if(temp){
    do{
            values += temp.data + '-> ';
            temp = temp.next;
        }while(temp !== this.head);
    }
    console.log(values + '')
}
*/
}

