const  sortedSquared = require('./sorted-squete.js');


describe('Test cases sorted square', () => {

    it('Must pass the test', () =>{

        const testCases = [{input: [1, 2, 3, 5, 6, 8, 9], output:    [1, 4, 9, 25, 36, 64, 81]}
    ]
    
    
    for( test of testCases){
        expect(sortedSquared(test.input)).toEqual(test.output)
    }
})

})