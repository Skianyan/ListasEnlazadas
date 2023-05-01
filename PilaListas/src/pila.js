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
        // Se definen los valores de los operadores
        const values = {
          '+': 1,
          '-': 1,
          '*': 2,
          '/': 2,
          '^': 3,
        };

        // Creacion de variables / stack
        const stack = new StackList()
        let output = '';
        
        // Ciclo principal para leer cuandos caracteres tiene la expresion 
        for (let i = 0; i < data.length; i++) {
          const char = data[i];
        
        // Leer si el caracter es un operando y lo inserta a la salida
          if (/[A-Za-z0-9]/.test(char)) {
            output += char;
            // Si es parentesis izquierdo insertar a la pila
          } else if (char === '(') {
            stack.push(char);
            // si es parentesis derecho, sacar los operadores de la pila hasta encontrar un parentesis izq
          } else if (char === ')') {
            while (stack.top.data !== '(') {
              output += stack.pop();
            }
            // elimina el parentesis al final del ciclo
            stack.pop();
          } else {
            // si es un operando Y la pila no esta vacia y la cima no es un parentesis izquierdo
            if (stack.top != null){
            // compara el valor del caracter con el de la cima de la pila, si es menor inserta el de la pila
            if (stack.top.data !== '(' && values[char] <= values[stack.top.data]) {
              output += stack.pop();
            }
            stack.push(char);
          }
          // si no, inserta el caracter
          else
            stack.push(char);
          }
        }
        // al final del ciclo de los caracteres, insertar los caracteres de la pila en la salida
        while (stack.top != null) {
          output += stack.pop();
        }
        // desplegar la salida
        console.log(output)
      }
      
      toPre(data){
        // Se definen los valores de los operadores
        function switchval() {
              let op1 = operands.pop();
              let op2 = operands.pop();
              let op = operators.pop();
              let tmp = op + op2 + op1;
              operands.push(tmp);
        }
        const values = {
          '+': 1,
          '-': 1,
          '*': 2,
          '/': 2,
          '^': 3,
        };
        // Creacion de stacks
        let operators = new StackList();
        let operands = new StackList();

        // Ciclo principal para leer cuandos caracteres tiene la expresion 
        for (let i = 0; i < data.length; i++) {
          const char = data[i];

          // Si es parentesis izquierdo insertar a la pila de operadores
          if (char == '('){
            operators.push(char);
          }
          // si es parentesis derecho, ordenar los operadores de la siguiente forma 
          // (hasta encontrar un parentesis izquierdo en la pila)
          // saca 2 operadandos de la pila, saca 1 operador de la pila, inserta el
          // operador seguido de los 2 operadores
          else if (char == ')'){
            while (operators.length != 0 && operators.top.data != '('){
                switchval()
            }
            // elimina el '('
            operators.pop();
          }
          // si es un operando, agregar a la pila
          else if (/[A-Za-z0-9]/.test(char)){
            operands.push(char + "");
          }
          else{
            while (operators.top != null && operands.top != null && values[char] <= values[operators.top.data]){
                switchval()
            }
            operators.push(char);
          }
        }
        while (operators.top != null){
            switchval()
        }
        console.log(operands.top.data)
        }     
}