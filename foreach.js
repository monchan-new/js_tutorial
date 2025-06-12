let a = [ "ant", "bat", "cat", 42];
a.forEach(function(i) {
  console.log(i);
});

let solioquy = "To be, or not to be, that is the question:";
Array.from(solioquy).forEach(char =>{
  console.log(char);
});
// Array.from(solioquy).forEach(char => console.log(char));
