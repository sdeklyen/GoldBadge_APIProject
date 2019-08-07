let weather = 75;

if ( weather < 70) {
    console.log('wear a jacket!')
} else {
    console.log('No jacket needed!')
}

let name = 'Dave';

if (name == 'Sam') {
    console.log('Hello, my name is Sam')
} else {
    console.log('Hello, is your name', name, '?')
}

let name = 'aUTuMN';
if (name.charAt(0) == name.charAt(0).toUpperCase()) {
    firstLetter = name.charAt(0)+name.slice(1).toLowerCase()
console.log(firstLetter)
} else {
    otherLetters = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    console.log(otherLetters) 
}