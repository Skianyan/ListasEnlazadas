import StackList from "./src/pila.js" ;

const pila = new StackList();

pila.push(1)
pila.push(2)
pila.push(3)
pila.push(4)
console.log(pila.pilaSize())
pila.pilaTop()
pila.printStack()
console.log(pila.pop())
pila.printStack()


