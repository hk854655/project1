function greet (name,callBack) {
    console.log(`Hello ${name}`);
    callBack()
    
}

function sayGoodBy() {
    console.log("Good Bye");
    
}

greet("Hari", sayGoodBy)
