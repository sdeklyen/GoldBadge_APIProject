/* 
CALLING FUNCTIONS
*/

function hi () {
    console.log('HI!')
}

hi(); 
//^^This is how we invoke our function (start button on a machine)

function list() {
    for(let i=1; i<=10; i++)
    console.log(i)
}

list();

let arr = ['This', 'is', 'really', 'cool']
function runArr() {
    for (let data of arr)
    console.log(data)
}

runArr()