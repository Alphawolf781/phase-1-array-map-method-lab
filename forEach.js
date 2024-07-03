// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(myFunction())

// let numbers = [4, 9, 16, 25]
// let newArr = numbers.map(myFunction)
// numbers=newArr
// function myFunction(num){
//     return num * 10
// }
// console.log(myFunction(numbers[4, 9,16,25]))

// Example array of objects representing shoes
// let shoes = [
//     { id: 1, brand: 'Nike', size: 10 },
//     { id: 2, brand: 'Adidas', size: 9 },
//     { id: 3, brand: 'Puma', size: 11 },
//     { id: 4, brand: 'Reebok', size: 10 }
// ];

// // Function to find a shoe by size
// function findShoeBySize(shoesArray, sizeToFind) {
//     return shoesArray.find(shoe => shoe.size === sizeToFind);
// }

// // Example usage:
// // let shoeSize10 = findShoeBySize(shoes, 10);
// console.log(findShoeBySize(shoes, 10)); // Output: { id: 1, brand: 'Nike', size: 10 }

// // let shoeSize9 = findShoeBySize(shoes, 9);
// // console.log(shoeSize9); // Output: { id: 2, brand: 'Adidas', size: 9 }

// // let shoeSize11 = findShoeBySize(shoes, 11);
// // console.log(shoeSize11); // Output: { id: 3, brand: 'Puma', size: 11 }

// // let shoeSize12 = findShoeBySize(shoes, 12);
// // console.log(shoeSize12); // Output: undefined (if size 12 is not found)

// Example array of numbers
// let numbers = [1, 2, 3, 4, 5];

// Example function to log each element
// function logElement(element) {
//     console.log(element);
// }

// Using forEach to log each element
// numbers.forEach(logElement);
// Output:
// 1
// 2
// 3
// 4
// 5

// Example with inline function
// numbers.forEach(function(element) {
//     console.log(element * 2);
// });
// Output:
// 2
// 4
// 6
// 8
// 10

// Example with arrow function
// numbers.forEach(element => {
//     console.log(element * element);
// });
// Output:
// 1
// 4
// 9
// 16
// 25
// Example array of numbers
let numbers = [1, 2, 3, 4, 5];

// Example accumulator function to sum all elements
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, );

console.log(sum);
// Output: 15
