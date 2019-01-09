// for loops count by adding 1 to 10

for(var i = 0; i < 10; i++){
    console.log(i)
}

// using for loop, count to 20 by 2's
for(var i = 0; i <= 20; i+=2){
    console.log(i)
}

// using a for loop counting from 10 to 0, going down by 1's
for(var i = 10; i > -1; i--){
    console.log(i)
}    

//using loop, count from 0, going down by 2's to -24

for(var i = 0; i >= -24; i-=2) {
    console.log(i)
}

// using a for loop, go through a name and display each letter individually

let str = "name";
for(var i = 0; i < str.length; i++) {
    console.log(str[i])
}

// make a for loop to where you add all the numbers from 1 to 50 (should equal 1275)

var sum = 0;

    for (var i = 1; i <= 50; i++) {
        sum += 1
    
     
    console.log(sum);
}