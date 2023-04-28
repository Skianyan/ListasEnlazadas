import Node from "./nodo.js";

export default // Clase LinkedList
class SCLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  dcInsert(data){
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
  let values = 'O -> ';
  
  do{
          values += temp.data + ' <-> ';
          temp = temp.next;
      }while(temp !== this.head);

  console.log(values + 'O')
}
/* Old Methods

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

