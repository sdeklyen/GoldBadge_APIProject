/*
RETURN
*/

let hi = () => {
    return 'hi'
    //(1)
};

let newName=hi();
//   (2)     (3)
console.log(newName);

//1-The keyword that brings our data out of our function
//2-We need a new variable to hold the value of the return
//3-When called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';
    for (let letter in name) {
        if(letter == 0 || letter ==2) {
            capName+= name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

const myName = capitalizedName('dekLYeN');
console.log(myName + ', how are you doing?')

function tipCalculator(price) {
    if (price<=50) {
        tipPercent=25
    }
    else {
        tipPercent=20
    }
    return price*tipPercent/100;
}
const tip = tipCalculator(100);
console.log(`You will tip ${tip} dollars`)