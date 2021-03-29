/*package.json comments
    test kan også bruge jest --watch for mere kontrol - og for at den automatisk kører testen igen, når man ændrer noget 





*/


const { expect } = require('@jest/globals');
const {sumFunction, productOfSumNums} = require('./simpleFunc');

//unit
test("should output sum of 2 numbers",()=>
     {
         //expect(sumFunction(10,20)).toBe("The result is: 30");
         //expect(sumFunction(400,600)).toBe("The result is: 1000");
         expect(sumFunction(10,20)).toBe(30);
         expect(sumFunction(400,600)).toBe(1000);
     })

test("should be data-less text",()=>
     {
         expect(sumFunction(null,null)).toBe(0);
     })

//integratio
test('should get product of 2 sums', () =>
     {
         const text = productOfSumNums(10,20,5,5)
         expect(text).toBe(30*10)
     })