const flatten = require("./test/testFlatten")

const nestedArray = [1, [2], [[3]], [[[4]]]];

const result = flatten(nestedArray);

console.log(result);

