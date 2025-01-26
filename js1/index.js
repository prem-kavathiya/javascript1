{
  const arr = [5, 6, 8, 3, 2];
  let newArr = arr.map(x => {
      if (x % 2 == 0) {
          return x * x * x;
      } else {
          return x * x;
      }
  });
  console.log(newArr);
}

{
  const students = [
      {
          name: "Alice",
          age: 20,
          major: "Computer Science",
          grades: [90, 85, 88],
          hobbies: ["Painting", "Reading", "Gaming"]
      },
      {
          name: "Bob",
          age: 22,
          major: "Mathematics",
          grades: [92, 81, 77],
          hobbies: ["Chess", "Cooking", "Gaming"]
      },
      {
          name: "Charlie",
          age: 19,
          major: "Physics",
          grades: [87, 90, 95],
          hobbies: ["Cycling", "Photography", "Swimming"]
      }
  ];
  const gamingStudents = students.filter(student => student.hobbies.includes("Gaming"))
  console.log(gamingStudents);

  console.log(students.map(student => student.age));
  console.log(students.map(student => student.name));
  console.log(students.map(student => student.hobbies.length));

  let upto20 = students.filter(students => students.age < 21 && students.hobbies.includes("Gaming"));
  console.log(upto20);
}

{
  let arr = ['apple', 'been', 'pie', 'mangoes', 'been', 'pie'];
  let arr2 = [];
  let length = arr.map(x => x.length).sort();
  for (let i = 0; i < length.length; i++) {
      for (let p = 0; p < arr.length; p++) {
          if (length[i] == arr[p].length)
              arr2.push(arr[p]);
      }
  }

  let a = [...new Set(arr2)];
  console.log(a);
}

{
  const students = [
      { name: "Student 1", age: 18, major: "Computer Science", grades: [85, 90, 88], hobbies: ["Reading", "Gaming", "Traveling"] },
      { name: "Student 2", age: 19, major: "Mathematics", grades: [88, 92, 89], hobbies: ["Chess", "Cooking", "Gaming"] },
      { name: "Student 3", age: 20, major: "Physics", grades: [87, 85, 90], hobbies: ["Cycling", "Photography", "Swimming"] },
  ];

  const gaming = students.filter(student => student.hobbies.includes("Gaming"));
  console.log(gaming);
  console.log(gaming.length);

  let chess260 = students.filter(student => {
      const greds260 = student.grades.reduce((a, c) => a + c, 0);
      return greds260 > 260 && student.hobbies.includes("Chess");
  });
  console.log(chess260);
}

{
  let arr = ['apple', 'been', 'pie', 'mangoes', 'been', 'pie'];
  let kk = arr.map(student => student.length).sort();
  let pp = [];
  for (let i = 0; i < kk.length; i++) {
      for (let p = 0; p < arr.length; p++) {
          if (kk[i] == arr[p].length)
              pp.push(arr[p]);
      }
  }
  let newarr = [...new Set(pp)];
  let ll = newarr.sort((a, b) => b.length - a.length);
  console.log(ll);
}

{
  const gh = [90, 85, 72, 88, 95, 68, 100, 82];
  let cc = [];
  let hh = gh.sort((a, b) => b - a);
  let pp = hh[0];
  let kk = hh[hh.length - 1];
  cc.push(pp, kk);
  console.log(cc);
}

{
  const nums = [7, 12, 5, 18, 23, 10, 8];
  let replaced = nums.map(num => (num % 2 !== 0 ? -1 : num));
  console.log(replaced);
}

{
  const array = [5, 18, 25, 10, 50, 32, 3, 40];
  let threshold = 20;
  let count = array.filter(num => num > threshold).length;
  console.log(count);
}

{
  const values = [18, 12, 18, 24, 30, 12, 8];
  let uniqueValues = [...new Set(values)].sort((a, b) => a - b);
  let smallest = uniqueValues[0];
  let largest = uniqueValues[uniqueValues.length - 1];
  console.log([smallest, largest]);
}

{
  const data = [8, 3, 45, 12, 29, 55];
  let sortedData = data.sort((a, b) => a - b);
  let product = sortedData[0] * sortedData[sortedData.length - 1];
  console.log(product);
}

{
  const arr = [10, 15, 22, 9, 31, 18, 44, 27];
  let evens = arr.filter(num => num % 2 === 0);
  let odds = arr.filter(num => num % 2 !== 0);
  console.log({ evens, odds });
}

{
  const numbers = [25, 10, 47, 83, 12, 39];
  let sorted = numbers.sort((a, b) => a - b);
  let smallest = sorted[0];
  let largest = sorted[sorted.length - 1];
  let sum = smallest + largest;
  console.log(sum);
}

{
  const nums = [15, 42, 7, 19, 88, 30, 5, 60];
  let sortedNums = nums.sort((a, b) => b - a);
  let secondLargest = sortedNums[1];
  let secondSmallest = sortedNums[sortedNums.length - 2];
  console.log([secondLargest, secondSmallest]);
}

{
  const arr = [3, 7, 1, 5, 4, 1, 9];
  const removeFirstLowest = (data) => {
      let lowest = data[0];
      let idx = data.indexOf(lowest);
      data.splice(idx, 1);
      console.log("yes=>");
  };
}
