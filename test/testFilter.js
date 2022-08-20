const filter = (elements,cb)=>{

    const result = [];

    for(let i=0; i < elements.length;i++){
        cb(elements[i])&& result.push(elements[i])
    }
    return result;
}

module.exports = filter;