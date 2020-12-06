const database = require('./database')

describe('everything Ok', ( ) => {


    it ('sums', () => {
        let result = database.myFunction(2,4);
        expect(result).toEqual(6);
    })
})