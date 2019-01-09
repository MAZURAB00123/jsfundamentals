var x = 12;

function scope() {
var x = 33;   // Declaration        Initiation     
    console.log(x); 
}

scope();
console.log(x);

 // scope is a position of the code & can only reach up value up but not down.
 // Var is creating a new value. 


 // Var vs. let

var y = 12;

function varlet() {
    let y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y)
}
    varlet();
    console.log(y);

}

// CONST

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
    }
    console.log(scope);
    }

    constTest();

    
