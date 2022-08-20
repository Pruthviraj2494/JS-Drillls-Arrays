const reduce = require("./test/testReduce")

const items = [1, 2, 3, 4, 5, 5];

const cb = (acc,curr)=>{
    acc + curr
}

const result = reduce(items,cb,items[0]);

console.log(result);



