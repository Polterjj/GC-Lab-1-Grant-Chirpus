const { default: expect } = require('expect');
const { test } = require('picomatch');
let addition = require('./main')

//tests come in two parts
//the description for the test and the actual test
//Focus on input and output

test ('Adding 1 and 2 should make 3', () => {
    //Here is where the unit test happens

    //Arrange
    //Arrange is where you set up your test
    //Variables you might need

    //Act
    //Do the test
let testSum = main.addition(1,2);
    //Assert
    //This is what should happen if the function does what I think it does
    expect(testSum).toBe(3);
});

//code coverage
//SonarQube SonarCloud
test('Subtracting 7 and 4 should make 3', () =>{
    let testDifference = main.Subtraction(7,4);

    expect(testDifference).toBe(3);
})
