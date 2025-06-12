let a = [81,17,42,99];
a.sort((a,b) => {
  return a-b;
}).forEach( i => { console.log(i);
});


// a.sort((a,b) => a-b).forEach(i => console.log(i));

// a.sort(function(a,b) {
//   return a-b;
// }).forEach(function(i) {
// console.log(i);
// });