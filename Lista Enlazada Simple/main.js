import sortedList from "./src/lista_ordenada.js" ;

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


const list = new sortedList();

var listStartTime = performance.now()
for(let i=0;i<10000;i++){
    list.insertAtBeginning(getRandomInt(20000))
} 
var listEndTime = performance.now()
console.log(`Creating the linked list took: ${msToTime(listEndTime - listStartTime)} milliseconds`)



var sortStartTime = performance.now()
list.sortWithSelect()
var sortEndTime = performance.now()
list.printList()


console.log(`Sorting the linked list took: ${msToTime(sortEndTime - sortStartTime)} milliseconds`)
