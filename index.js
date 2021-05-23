// Code your solutions in this file
const names = ["Billy", "Tim", "Judy"];

const event = "birthday";


function writeCards(names, event){
    let newArray = [];
    for(let i = 0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
 }
 
 return newArray;

}

writeCards('names', 'event');

function countDown(init = 10){
    while (init >= 10);
    console.log(init--);
    
}
  
