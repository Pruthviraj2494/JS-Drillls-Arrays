const filter = require("./test/testFilter");

const items = [1, 2, 3, 4, 5, 5];

const result = filter(items,(element)=> element > 2)

console.log(result); 