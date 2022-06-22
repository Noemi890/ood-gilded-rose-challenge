const {update, updateBrie, updateConjuredItem, updateSulfuras, updateTickets} = require('./helpingFunctions')

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i]

      if (currentItem.name.includes('Conjured')) {
        updateConjuredItem(currentItem)
      } 
      else if (currentItem.name.includes('Aged')) {
        updateBrie(currentItem)
      }
      else if (currentItem.name.includes('Vest')) {
        update(currentItem)
      }
      else if (currentItem.name.includes('Elixir')) {
        update(currentItem)
      }
      else if (currentItem.name.includes('Sulfuras')) {
        updateSulfuras(currentItem)
      }
      else if (currentItem.name.includes('Backstage')) {
        updateTickets(currentItem)
      }
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
  // Brie
}
