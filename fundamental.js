// How to declare a variable usnig let and const 
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';
// 2. condition 
// 6 basic condition > ,<, ===,!==, <=, >=

// multiple condition: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {
    
}else if (fatherName === 'Arnold') {
    
} else {
    
}

//3. array 
//index 
const numbers = [15, 54, 63 ,214, 1,52 ,58 ,8978, 9, 4]
numbers[0] = 1
// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
} 

// function
function multiply (num1, num2) {
   const result = num1 * num2;
   return result;
}
const output = multiply(50, 50);
// 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Rayhan Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}
const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name string