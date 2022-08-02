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



// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > args[0])
//       total += arg;
//   }
//   return total;

// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));




// function findMatches(arr, ...args) {
//   const matches = [];
//   const array = [...arr, ...args];
 
//   console.log(array);
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === array[i]) {
//       matches.push(i);
//     }
//   }


//   // for (let elem of first) {
//   //   if (other.includes(elem)) {
//   //     matches.push(elem);
//   //   }
//   // }

//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const remBook = this.books.indexOf(oldName);
//     this.books.splice(remBook, 1, newName);
//     return this.books;
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));



// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };



// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     if (this.potions.includes(potionName)) {
//       const delElem = this.potions.indexOf(potionName);
//       this.potions.splice(delElem, 1);
//     }
//   },
// };


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const ind = this.potions.indexOf(oldName);
//     this.potions.splice(ind, 1, newName);
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));













// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (potion of this.potions) {
//       if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
      
      
//     }
//     this.potions.push(newPotion);
//     return this.potions;
    
//   },
//   removePotion(potionName) {
//     for (potion of this.potions) {
//       const potionIndex = potion.name.indexOf(potionName.name);

//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
//     }
//     this.potions.splice(potionIndex, 1);
//     return this.potions;
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));








// const words = ['ooo', 'aaa', 'sss', 'aaa'];

// function unique(arr) {
//   const newArray = [];
//   for (let word of arr) {
//     if (!newArray.includes(word)) {
//       newArray.push(word);
//     }
//     return newArray;
//   }
// }
// console.log(unique(words));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((c, d) => c.rating - d.rating);

// const sortedByDescentingRating = [...books].sort((c, d) => d.rating - c.rating);



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const getNamesSortedByFriendCount = [...users]
//   .sort((a, b) => a.friends.length - b.friends.length)
//   .flatMap(user => user.name);

// const getSortedFriends = [...users].flatMap(user => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((a, b) => a.localeCompare(b));

// const getTotalBalanceByGender = (users, gender) => 
//   users.filter(user => user.gender === gender)
//     .map(user => user.balance)
//     .reduce((a, user) => a + user.balance, 0);
// console.log(getTotalBalanceByGender);