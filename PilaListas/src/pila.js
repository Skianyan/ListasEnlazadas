import NodeStack from "./nodo.js";

export default // Clase PilaLista
class StackList {
    constructor() {
      this.top = null;
    }
    
    pilaTop = () => {
      console.log(this.top.data) 
    }

    pilaVoid = () => {
      return this.top === null
    }

    pilaWipe = () => {
      this.top = null
    }

    pilaSize = () => {
        var temp = this.top;
        var count = 0;
      while (temp != null)
      {
        count++;
        temp = temp.next;
      }
    return(count)
    }

    push(data){
      const nuNode = new NodeStack(data);
      nuNode.next = this.top;
      this.top = nuNode
    }

    pop = () => {
      if (this.pilaVoid()){
        throw new Error ("Pila vacia")
      }
      this.aux = this.top.data
      this.top = this.top.next
      return this.aux
    }
    
    printStack() {
      let temp = this.top;
      let values = '';
      if (this.pilaVoid()){
        throw new Error ("Pila vacia")
      }
      do{
              values += temp.data + '-> ';
              temp = temp.next;
          }while(temp !== null);
          console.log(values + 'null')
      }
  }