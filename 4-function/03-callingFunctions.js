function hi(){
    console.log("HI");
    return "Hey";
}

//hi;
//hi();
console.log(hi);
console.log(hi());

//creat a function that, when invoked, list out the numbers from 1 to 10

function list(){
    for(var x = 1; x <= 10; x++) {
        console.log(x);

    }
    return "Done!"; 
}

console.log(list());

//Given the array, creat a function that list out the values individually

let arr = ["This", "is", "really", "cool?"]

function ind() {
    for(item of arr) {
        console.log(item);
    }
}

ind();