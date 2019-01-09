var student = {name: "Harry", awesome: true, degree: "JavaScript", week: 1};

for (item in student) {
    console.log(item in student);
    console.log(student[item])
}
 
var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];
for (tom in pieArray) {
    console.log(tom);
}

// write a for in loop that capitalizes the fist letter of a student's name
var studentName = 'hArRy';
var capName;
for (let n in studentName) { // you can use anything in the "n" position
    if (n == 0) {
        capName = studentName[n].toUpperCase();
} else {
    capName += studentName[n].toLowerCase();
}

}

console.log(capName);