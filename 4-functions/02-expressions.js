
function hi() {
    console.log('HI!');
}

//vs.

let hey = function hi() {
    console.log('HI!')
}

//the variable 'hey' is now representative of the function 'hi()'

/*
Difference between declaration and expression:
Declaration gets hoisted
Expression does not
*/

//ANONYMOUS FUNCTION

let hi = function () {
    console.log('HEY!')
};