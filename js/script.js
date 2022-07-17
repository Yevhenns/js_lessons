// function getExtremeElements(array) {
//   // Change code below this line
//   const arrayNew = [];
//   arrayNew.push(array[0]);
//   arrayNew.push(array[array.length - 1]);
//   return arrayNew;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// // console.log([1, 2]);


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
  
//   let mes = message.split(" ");
//   let totalPrice = mes.length * pricePerWord;
//   return totalPrice;

//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// function slugify(title) {
//   // const sl = title.toLowerCase;
//   const sl = title.split(" ");
//   const slug = sl.join("-");
//   const slugs = slug.toLowerCase();
//   return slugs;
// }
// console.log(slugify("Arrays for begginers"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 1);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// function makeArray(firstArray, secondArray, maxLength) {
//   const bigArray = firstArray.concat(secondArray);
//   const newArray = bigArray.slice(0, maxLength);
//   return newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// function calculateTotal(number) {
//   let result = 0;
//   for (let i = 1; i <= number; i += 1) {
//     result += i;
//   }
//   return(result);
// }
// console.log(calculateTotal(3));


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("Стонога скирдує стовідсоткову козьмещинську потужність"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(5, 16));


// function filterArray(numbers, value) {
//   const array = [];
//   for (let number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//   }
//   return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 2));



// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("mandarin"))



// общие эл-ты мыссивов
// function getCommonElements(array1, array2) {
//   const array3 = [];
//   for (elem of array1) {
//     if (array2.includes(elem)) {
//       array3.push(elem);
//     }
//   }
//   return array3;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (elem of order) {
//     total += elem;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));



// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getEvenNumbers(start, end) {
//   const array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(getEvenNumbers(3, 11));



// function includes(array, value) {
//   for (elem of array) {
//     if (elem === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));



// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// const val = Object.values(apartment);
// for (let value of val) {
//     values.push(value);
// }
// console.log(values)



// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
    
//     const arr = Object.keys(object);
//     propCount = arr.length;


//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const arraySalaries = Object.values(salaries)
//     for (let salary of arraySalaries) {
//         totalSalary += salary;
//     }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//     if (productName === product.name) {
//         return (product.price);
//     }
// }
//     return null;

//   // Change code above this line
// }
// console.log(getProductPrice("Grip"));




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const array = [];
//     for (let product of products) {
//         if (product.hasOwnProperty(propName)) {
//             array.push(product[propName]);
//         }
//     }
//     return array;
// }
// console.log(getAllPropValues("quantity"));
 


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for (let product of products) {
//         if (productName === product.name) {
//             let b = product["price"];
//             let c = product["quantity"];
//             let a = b * c;
//             return a;
//         }
//     }
//     return 0;
// }
// console.log(calculateTotalPrice("Scanner"));



// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
//   // Change code above this line
// }
// console.log(add(12, 4, 11, 48));


// Change code below this line
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
  // Change code above this line
}