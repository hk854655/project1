// 1: How do you access the first and last elements of an array?
const students = ["Vicky kumar","Himanshu kumar", 2, "Sanjeev kumar"]
let firstStudent = students[0]
let lastStudent = students[students.length-1]

// console.log(students);

// console.log(lastStudent);
// console.log(students.length);

let temp = students.indexOf("Himanshu kumar");
if(temp !== -1){
    console.log(temp,"Element founded");
    
} else {
    console.log(temp,"Element not founded");
    
}