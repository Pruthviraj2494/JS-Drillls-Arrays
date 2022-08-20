const flatten = (elements)=>{
    const flat = [];

    for(let item of elements){
      if (Array.isArray(item)) {
        flat.push(...flatten(item));
      } else {
        flat.push(item);
      }
    };
    return flat;
}

module.exports = flatten;