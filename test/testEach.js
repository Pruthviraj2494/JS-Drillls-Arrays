const each = (elements, cb)=>{
    for(let i=0;i<elements.length;i++){
        cb(elements[i])
    }
}

module.exports = each;