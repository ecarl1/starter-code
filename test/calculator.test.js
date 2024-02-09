const CalculationOperations = require('../src/calculator');

 

describe("Calculation TestCases", () => {

 test("Add 2 numbers", () => {

    //Call function of Add

   var sum = CalculationOperations.Add(1,2)

   // assertions

   expect(sum).toBe(3);

 });

 test("Subtract 2 numbers", () => {

    //Call function of Subtract

   var subtract = CalculationOperations.subtract(10,2)

   // assertion

   expect(subtract).toBe(8);

 });

 test("Multiple 2 numbers", () => {

   // Call function of Subtract

   var multiple = CalculationOperations.multiple(2,8)

   // assertion

   expect(multiple).toBe(16);

 });

 test("Divide 2 numbers", () => {

  // Call function to divide the number

  var divide = CalculationOperations.divide(24,8)

  // assertion

  expect(divide).toBe(3);

});

})