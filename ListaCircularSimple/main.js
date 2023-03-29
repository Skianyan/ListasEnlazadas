import sortedList from "./src/lista_ordenada.js" ;
// Funciones
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
// -----------
const list = new sortedList();

var listStartTime = performance.now()
// Single circle linked list creacion
 // list.scInsert(5)

//Creacion de la lista definida
  list.scInsert(1)
  list.scInsert(3)
  list.scInsert(5)
  list.scInsert(4)
  
//Creacion de lista aleatoria  
/* for(let i=0;i<100;i++){
    list.dInsertSort(getRandomInt(20))
}  */

// ------------
var listEndTime = performance.now()




var sortStartTime = performance.now()
var sortEndTime = performance.now()
list.printList()


console.log(`Creating the linked list took: ${msToTime(listEndTime - listStartTime)} milliseconds`)
console.log(`Sorting the linked list took: ${msToTime(sortEndTime - sortStartTime)} milliseconds`)
