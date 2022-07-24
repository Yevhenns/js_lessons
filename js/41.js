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



//   addPotion(newPotion = {}) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//         }
//     this.potions.push(newPotion);
//       return this.potions;
//   },



//   removePotion(potionName) {
//     for (let potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1)
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },


//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       //   const potionIndex = potion.name.indexOf(oldName);
//       // console.log(potionIndex);
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
        
//       }
//     }
    
//     return `Potion ${oldName} is not in inventory!`;
//     // this.potions.splice(potionIndex, 1, newName);
//   },

// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }


// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));



// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of this.pizzas) {
//       if (this.pizzas.includes(pizzaName)) {
//         return onSuccess = makePizza(pizzaName);
//       }
//       return onError = onOrderError(pizzaName);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (element) {
//     totalPrice += element
//   });
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (element) {
//     if (element > value) {
//       filteredNumbers.push(element)
//     }
//   });
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element)
//     }
//   })
//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));



// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach(function (element) {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     }
//     else {
//       newArray.push(element);
//     } 
//   });
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));