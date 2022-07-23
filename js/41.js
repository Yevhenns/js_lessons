const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },



  addPotion(newPotion = {}) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
        }  
    this.potions.push(newPotion);
      return this.potions;
  },



  removePotion(potionName) {
    for (let potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1)
        return this.potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },


  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      //   const potionIndex = potion.name.indexOf(oldName);
      // console.log(potionIndex);
      if (potion.name === oldName) {
        potion.name = newName;
        return this.potions;
        
      }
    }
    
    return `Potion ${oldName} is not in inventory!`;
    // this.potions.splice(potionIndex, 1, newName);
  },

};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));


console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));