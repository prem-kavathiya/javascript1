// const arr = [5,6,8,3,2]  output = [25,216,512,9,8]
//
// const arr = [5, 6, 8, 3, 2];
// let newArr = arr.map(x => {
//     if (x % 2 == 0) {
//         return x * x * x;
//     } else {
//         return x * x;
//     }
// });
// console.log(newArr);

// const students = [
//     {
//         name: "Alice",
//         age: 20,
//         major: "Computer Science",
//         grades: [90, 85, 88],
//         hobbies: ["Painting", "Reading", "Gaming"]
//     },
//     {
//         name: "Bob",
//         age: 22,
//         major: "Mathematics",
//         grades: [92, 81, 77],
//         hobbies: ["Chess", "Cooking", "Gaming"]
//     },
//     {
//         name: "Charlie",
//         age: 19,
//         major: "Physics",
//         grades: [87, 90, 95],
//         hobbies: ["Cycling", "Photography", "Swimming"]
//     }
// ];
// const gamingStudents = students.filter(student => student.hobbies.includes("Gaming"))
// console.log(gamingStudents);

// console.log( students.map(student => student.age));
// console.log( students.map(student => student.name));
// console.log( students.map(student => student.hobbies.length));

// let upto20 = students.filter(students => students.age < 21 && students.hobbies.includes("Gaming"));
// console.log(upto20);


// let arr = ['apple', 'been', 'pie', 'mangoes', 'been', 'pie'] // ['pie','been','apple','mangoes']
// let arr2 = [] // [3,4,5,6]
// let length = arr.map(x => x.length).sort()
// for (i = 0; i < length.length; i++) {
//     for (p = 0; p < arr.length; p++) {
//         if (length[i] == arr[p].length)
//             arr2.push(arr[p])
//     }
// }


// let a = [...new Set(arr2)]

// console.log(a)



// const students = [
//     { name: "Student 1", age: 18, major: "Computer Science", grades: [85, 90, 88], hobbies: ["Reading", "Gaming", "Traveling"] },
//     { name: "Student 2", age: 19, major: "Mathematics", grades: [88, 92, 89], hobbies: ["Chess", "Cooking", "Gaming"] },
//     { name: "Student 3", age: 20, major: "Physics", grades: [87, 85, 90], hobbies: ["Cycling", "Photography", "Swimming"] },
//     { name: "Student 4", age: 21, major: "Engineering", grades: [90, 88, 84], hobbies: ["Painting", "Reading", "Gaming"] },
//     { name: "Student 5", age: 22, major: "Biology", grades: [89, 91, 87], hobbies: ["Gaming", "Robotics", "Traveling"] },
//     { name: "Student 6", age: 23, major: "Mathematics", grades: [85, 87, 84], hobbies: ["Reading", "Gaming", "Painting"] },
//     { name: "Student 7", age: 24, major: "Computer Science", grades: [92, 86, 90], hobbies: ["Traveling", "Chess", "Photography"] },
//     { name: "Student 8", age: 25, major: "Physics", grades: [88, 85, 87], hobbies: ["Gaming", "Cooking", "Swimming"] },
//     { name: "Student 9", age: 18, major: "Biology", grades: [85, 92, 89], hobbies: ["Reading", "Cycling", "Gaming"] },
//     { name: "Student 10", age: 19, major: "Engineering", grades: [90, 88, 84], hobbies: ["Painting", "Gaming", "Photography"] },
//     { name: "Student 11", age: 20, major: "Computer Science", grades: [87, 86, 88], hobbies: ["Cycling", "Gaming", "Traveling"] },
//     { name: "Student 12", age: 21, major: "Mathematics", grades: [85, 90, 89], hobbies: ["Gaming", "Robotics", "Cooking"] },
//     { name: "Student 13", age: 22, major: "Physics", grades: [92, 87, 90], hobbies: ["Reading", "Chess", "Photography"] },
//     { name: "Student 14", age: 23, major: "Biology", grades: [88, 85, 91], hobbies: ["Gaming", "Traveling", "Swimming"] },
//     { name: "Student 15", age: 24, major: "Engineering", grades: [89, 86, 84], hobbies: ["Painting", "Gaming", "Cycling"] },
//     { name: "Student 16", age: 18, major: "Computer Science", grades: [85, 88, 90], hobbies: ["Gaming", "Reading", "Cooking"] },
//     { name: "Student 17", age: 19, major: "Mathematics", grades: [92, 87, 89], hobbies: ["Traveling", "Gaming", "Photography"] },
//     { name: "Student 18", age: 20, major: "Physics", grades: [90, 85, 87], hobbies: ["Gaming", "Cycling", "Reading"] },
//     { name: "Student 19", age: 21, major: "Biology", grades: [88, 92, 84], hobbies: ["Gaming", "Robotics", "Chess"] },
//     { name: "Student 20", age: 22, major: "Engineering", grades: [85, 89, 90], hobbies: ["Reading", "Gaming", "Swimming"] },
//     { name: "Student 21", age: 18, major: "Computer Science", grades: [84, 88, 92], hobbies: ["Gaming", "Cycling", "Traveling"] },
//     { name: "Student 22", age: 19, major: "Mathematics", grades: [87, 89, 86], hobbies: ["Painting", "Reading", "Gaming"] },
//     { name: "Student 23", age: 20, major: "Physics", grades: [88, 91, 85], hobbies: ["Chess", "Gaming", "Photography"] },
//     { name: "Student 24", age: 21, major: "Biology", grades: [90, 84, 89], hobbies: ["Gaming", "Traveling", "Cooking"] },
//     { name: "Student 25", age: 22, major: "Engineering", grades: [92, 87, 88], hobbies: ["Gaming", "Cycling", "Painting"] },
//     { name: "Student 26", age: 23, major: "Computer Science", grades: [85, 90, 86], hobbies: ["Reading", "Gaming", "Robotics"] },
//     { name: "Student 27", age: 24, major: "Mathematics", grades: [88, 92, 87], hobbies: ["Gaming", "Traveling", "Swimming"] },
//     { name: "Student 28", age: 18, major: "Physics", grades: [90, 85, 89], hobbies: ["Gaming", "Cycling", "Photography"] },
//     { name: "Student 29", age: 19, major: "Biology", grades: [92, 86, 91], hobbies: ["Gaming", "Cooking", "Chess"] },
//     { name: "Student 30", age: 20, major: "Engineering", grades: [84, 88, 85], hobbies: ["Traveling", "Gaming", "Painting"] },
//     { name: "Student 31", age: 21, major: "Computer Science", grades: [87, 89, 90], hobbies: ["Cycling", "Gaming", "Robotics"] },
//     { name: "Student 32", age: 22, major: "Mathematics", grades: [89, 85, 92], hobbies: ["Reading", "Gaming", "Swimming"] },
//     { name: "Student 33", age: 23, major: "Physics", grades: [86, 84, 88], hobbies: ["Gaming", "Traveling", "Chess"] },
//     { name: "Student 34", age: 24, major: "Biology", grades: [91, 87, 90], hobbies: ["Painting", "Gaming", "Photography"] },
//     { name: "Student 35", age: 18, major: "Engineering", grades: [88, 92, 89], hobbies: ["Reading", "Gaming", "Cycling"] },
//     { name: "Student 36", age: 19, major: "Computer Science", grades: [85, 90, 84], hobbies: ["Traveling", "Gaming", "Robotics"] },
//     { name: "Student 37", age: 20, major: "Mathematics", grades: [87, 88, 92], hobbies: ["Gaming", "Painting", "Cooking"] },
//     { name: "Student 38", age: 21, major: "Physics", grades: [90, 85, 89], hobbies: ["Gaming", "Cycling", "Traveling"] },
//     { name: "Student 39", age: 22, major: "Biology", grades: [88, 87, 84], hobbies: ["Chess", "Gaming", "Photography"] },
//     { name: "Student 40", age: 23, major: "Engineering", grades: [85, 92, 86], hobbies: ["Gaming", "Reading", "Painting"] },
//     { name: "Student 41", age: 24, major: "Computer Science", grades: [89, 84, 90], hobbies: ["Gaming", "Traveling", "Cooking"] },
//     { name: "Student 42", age: 18, major: "Mathematics", grades: [92, 87, 88], hobbies: ["Cycling", "Gaming", "Photography"] },
//     { name: "Student 43", age: 19, major: "Physics", grades: [88, 89, 85], hobbies: ["Gaming", "Reading", "Chess"] },
//     { name: "Student 44", age: 20, major: "Biology", grades: [85, 92, 91], hobbies: ["Gaming", "Painting", "Cycling"] },
//     { name: "Student 45", age: 21, major: "Engineering", grades: [90, 84, 88], hobbies: ["Gaming", "Traveling", "Cooking"] },
//     { name: "Student 46", age: 22, major: "Computer Science", grades: [87, 85, 89], hobbies: ["Reading", "Gaming", "Photography"] },
// ]

// const gaming = students.filter(student => student.hobbies.includes("Gaming"));
// console.log(gaming);
// console.log(gaming.length);

// let chess260 = students.filter(student => {
//     const greds260 = student.grades.reduce((a, c) => a + c, 0);
//     return greds260 > 260 && student.hobbies.includes("Chess")
// })
// console.log(chess260);
