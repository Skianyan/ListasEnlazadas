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

    stackWipe = () => {
      this.top = null
    }

    stackSize = () => {
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
        throw new Error ("Pila vacia")
      }
      this.aux = this.top.data
      this.top = this.top.next
      return this.aux
    }
    
    printStack() {
      let temp = this.top;
      let values = '';
      if (this.isVoid()){
        throw new Error ("Pila vacia")
      }
      do{
              values += temp.data + '-> ';
              temp = temp.next;
          }while(temp !== null);
          console.log(values + 'null')
      }

      toPost(data){
      const stack = new StackList();
        let splitText = data.split("");
        let ans = []
        const constantes = {"(":0,"+":1, "-":1, "*":2, "/":2, "^":3}

        for (let i=0; i<splitText.length; i++){
            if (!['+','-','*','/','('].includes(splitText[i])){
                  ans.push(splitText[i])
            }
            else if (splitText[i] == ")"){
                while (!(stack[stack.stackSize - 1] == '(')){
                    ans += stack.pop(stack.stackSize-1)
                }
                    stack.top = stack[stack.stackSize-2]
            }
            else if (stack.isVoid()){
                stack.push(splitText[i])
            }
            else if (!stack.isVoid()) {
                if (splitText[i]>stack[stack.stackSize-1]){
                    stack.push(splitText[i])
                }
                else if (splitText[i]<=stack[stack.stackSize-1]){
                    ans += stack.pop(stack.stackSize-1)
                }
                else{
                    ans.push(splitText[i])
                }
            }
            
        }
        console.log(ans)
      }
  
}
/*
      toPost(data){
        let salida = ""
        const stack = new StackList();
        let consts = {"+": 1,"-": 1,"*": 2,"/": 2,"^": 3}
      
        for (let i = 0; i < data.length; i++) {
          let caracter = data[i]
          if (/^[a-zA-Z0-9]+$/.test(caracter)) {
            salida += caracter
          } else if (caracter === "(") {
            stack.push(caracter)
          } else if (caracter=== ")") {
            while (stack.stackSize(stack) > 0 && stack[stack.stackSize(stack) - 1] !== "(") {
              salida += stack.pop()
            }
            stack.push(caracter)
          } else {
            while (
              stack.stackSize(stack) > 0 &&
              stack[stack.stackSize(stack) - 1] !== "(" &&
              consts[caracter] <= consts[stack[stack.stackSize(stack) - 1]]
            ) {
              salida += stack.pop()
            }
            stack.push(caracter)
          }
        }
      
        while (stack.stackSize(stack) > 0) {
          salida += stack.pop()
        }
      
    console.log(salida)
      }
  */




