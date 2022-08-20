const reduce = (elements,cb,startingValue) => {
    let sum  = startingValue;                             
    for(let i=1; i<elements.length; i++){
        cb(sum += elements[i])            
    }
    
    return sum;  
}

module.exports =  reduce ;
