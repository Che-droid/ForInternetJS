function array(){
let array = new Array (1, 12, 44, "text", 7, 53);

console.log ("array1");
console.log (array);

console.log ("concat");
array = array.concat ([3, 23, 5]);
console.log (array);

console.log ("join");
console.log (array.join (" "));

console.log ("pop");
console.log (array.pop ());

console.log ("push");
array.push (0, -1, -2, -3);
console.log (array);

console.log ("slice");
console.log (array.slice (2, 5));

console.log ("shift");
console.log (array.shift ());

console.log ("reverse");
array = array.reverse ();
console.log (array);

console.log ("splice");
array.splice (3, 3, -100, 100, 12);
console.log (array);

console.log ("toString");
console.log (array.toString ());

console.log ("length");
console.log (array.length);

console.log ("sort");
array = array.sort ();
console.log (array);

console.log ("indexOf 12");
console.log (array.indexOf (12));
}