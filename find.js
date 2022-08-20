const find = require("./test/testFind");

const items = [1, 2, 3, 4, 5, 5];

const input = 2;

const result = find(items,(element)=> element === input);

console.log(result); 