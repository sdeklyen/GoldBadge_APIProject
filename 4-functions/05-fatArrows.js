/*
FAT ARROW FUNCTIONS
*/

//BLOCK BODY
let hi = () => {
//    (1)  (2)
    console.log('hello!')
}

hi()

//-> != =>
//1-We need to set the fat arrow function to a variable
//2-We use the 'fat arrow' to signify that it is a function


//CONCISE BODY
let hi = () => console.log('hi');
let apples = x => console.log(`There are ${x} apples in the basket`);
apples(10)
//More than one parameter will require parantheses
//Return (if one-line fat arrow function) is implied

let apples = (x) => {
    console.log(`There are ${x} apples in my basket`)
}
apples(10)

let func = () => console.log('hi');
//the fat arrow needs to be on the same line as the variable