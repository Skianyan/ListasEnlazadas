import SCLinkedList from "./lista_enlazada.js";
import Node from "./nodo.js";

export default // Sort Burbuja
class sortedList extends SCLinkedList{  

    constructor(){
        super(null)
    }

sortWithBubble(){
    let copy = this.head
    let cat 

    while(copy !== null){
        cat = copy.next

        while(cat !== null){
            if(copy.data>cat.data){
                let temp = copy.data
                copy.data = cat.data
                cat.data = temp
            }
            cat = cat.next
        }
        copy = copy.next
    }
}

sortWithSelect() {
    let current = this.head;

    while (current) {
      let min = current;
      let innerCurrent = current.next;

      while (innerCurrent) {
        if (innerCurrent.data < min.data) {
          min = innerCurrent;
        }
        innerCurrent = innerCurrent.next;
      }

      let temp = current.data;
      current.data = min.data;
      min.data = temp;

      current = current.next;
    }
  }

sortWithInsert() {
    if (!this.head) {
        return null;
    }

    let newlist = new Node()
    let next = null
    let i=null

    while(this.head){
        next=this.head.next
        i=newlist
        while(i.next && i.next.data<this.head.data){
            i=i.next
        }
        this.head.next=i.next
        i.next=this.head
        this.head=next
    }

    this.head = newlist.next
}
}