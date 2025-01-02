// const arr = [5,6,8,3,2]  output = [25,216,512,9,8]

const arr = [5, 6, 8, 3, 2];
let newArr = arr.map(x => {
    if (x % 2 == 0) { 
        return x * x * x; 
    } else {
        return x * x; 
    }
});
console.log(newArr); 


