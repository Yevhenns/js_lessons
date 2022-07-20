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

  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name !== newPotion.name) {
        this.potions.push(newPotion);
        return this.potions;
      }
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }    
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
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },

};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log();
console.log();
