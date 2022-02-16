/*
Write a function that takes in a non-empty array of integers 
that are sorted in ascending order and returns a new array of the same length with the squares of 
the original integers also sorted in ascending order.

*/

function sortedSquared(array){
    if(!array) return [];

    const mem = {};
    let res =  array.map(val =>  {
        let response;
        if(mem[val]){
            response = mem[val]
        }else {
            response = val*val
            mem[val] = response  
        }
        
        return response
    }).sort();

    return res;
}

module.exports = sortedSquared;