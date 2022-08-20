const find = (elements,cb)=>{

    let result ;

    for(let i=0; i < elements.length;i++){
        if(cb(elements[i])) result = elements[i]
    }
    return result;
}

module.exports = find;