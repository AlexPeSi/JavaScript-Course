//Global scope
var globalVar = "I'm a global variable!";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    //Block scope
    var blockVar = "I'm a block scoped variable!";
    let blockLet = "I'm a block-scoped let variable";
    const blockConst = "I'm a block-scoped constant";
}


// Global scope
console.log(`globalVar: ${globalVar}`);
console.log(`globalLet: ${globalLet}`);
console.log(`globalConst: ${globalConst}`);

// Block scope
console.log(`blockVar: ${blockVar}`);
// console.log(`blockLet: ${blockLet}`);
// console.log(`blockConst: ${blockConst}`);

function show(){
    var functionVar = "I'm a block-scoped var in a function!";
    let functionLet = "I'm a block-scoped let in a function";
    const functionConst = "I'm a block-scoped const in a function";
}

show();

// Fucntion block scope
console.log(`functionVar: ${functionVar}`);
console.log(`functionLet: ${functionLet}`);
console.log(`functionConst: ${functionConst}`);


