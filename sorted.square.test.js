const  sortedSquared = require('./sorted-square.js');


describe('Test cases sorted square', () => {

  
         const testCases = [
            {input: [1,2,3], output:[1,4,9]},
            {input: [1, 2, 3, 5, 6, 8, 9], output:    [1, 4, 9, 25, 36, 64, 81]},
            {input:  [-2, -1], output: [1, 4]},
            {input: [-10, -5, 0, 5, 10], output: [0, 25, 25, 100, 100]}
        ]
     

    for( let i = 0; i < testCases.length; i++){
         let test = testCases[i];  
        it(`Must pass the test ${i +1}`, () =>{
            expect(sortedSquared(test.input).sort()).toEqual(test.output.sort())
        });
    }
})
