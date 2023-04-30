import NodeStack from "./nodo.js";

export default // Clase PilaLista
class StackList {
    constructor() {
      this.top = null;
    }
    
    stackTop = () => {
      console.log(this.top.data)
    }

    isVoid = () => {
      return this.top === null
    }

    wipe = () => {
      this.top = null
    }

    length = () => {
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
      if (this.isVoid()){
        throw new Error ("Pila vacia (pop func)")
      }
      this.aux = this.top.data
      this.top = this.top.next
      return this.aux
    }
    
    printStack() {
      let temp = this.top;
      let values = '';
      if (this.isVoid()){
        throw new Error ("Pila vacia (print func)")
      }
      do{
              values += temp.data + '-> ';
              temp = temp.next;
          }while(temp !== null);
          console.log(values + 'null')
      }

    toPost(data) {
        const values = {
          '+': 1,
          '-': 1,
          '*': 2,
          '/': 2,
          '^': 3,
        };
      
        const stack = new StackList()
        let output = '';
      
        for (let i = 0; i < data.length; i++) {
          const char = data[i];
      
          if (/[A-Za-z0-9]/.test(char)) {
            output += char;
          } else if (char === '(') {
            stack.push(char);
          } else if (char === ')') {
            while (stack.top.data !== '(') {
              output += stack.pop();
            }
            stack.pop();
          } else { // char is an operator
            if (stack.top != null){
            if (stack.top.data !== '(' && values[char] <= values[stack.top.data]) {
              output += stack.pop();
            }
            stack.push(char);
          }
          else
            stack.push(char);
          }
        }
      
        while (stack.top != null) {
          output += stack.pop();
        }
      
        console.log(output)
      }
      
  
}