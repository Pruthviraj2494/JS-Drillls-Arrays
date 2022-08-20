const map = require("./test/testMap");

const items = [1, 2, 3, 4, 5, 5];

console.log(map(items,(element,index,elements)=>element+2)); // add 2 to each element