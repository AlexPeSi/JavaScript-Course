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
// console.log(`functionVar: ${functionVar}`);
// console.log(`functionLet: ${functionLet}`);
// console.log(`functionConst: ${functionConst}`);

// Practice time!
{
    var bv = "blockvar";
    let bl = "blocklet";
    const bc = "blockconst";
    console.log(`printing all -- \n 
    block variable: ${bv} \n
    block let: ${bl} \n
    block constant: ${bc}`);

    bv = "blockvar-updated";
    bl = "blocklet-updated";
    // bc = "blockconst-updated";

    console.log(`printing all -- \n
    block variable: ${bv} \n
    block let: ${bl} \n
    block constant: ${bc}`);
}

    bv = "blockvar-updated-outside";
    bl = "blocklet-this is a new one actually";
    bc = "blockconst-this is also a new one";

    console.log(`printing all -- \n
    block variable: ${bv} \n
    block let: ${bl} \n
    block constant: ${bc}`);


