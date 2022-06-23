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
    const conjuredManaCake = 'Conjured Mana Cake'
    const agedBrie = 'Aged Brie'
    const legendarySulfuras = 'Sulfuras, Hand of Ragnaros'
    const tickets = 'Backstage passes to a TAFKAL80ETC concert'

    this.items.forEach(element => {
      switch(element.name) {
        case conjuredManaCake:
          updateConjuredItem(element)
          break
        case agedBrie:
          updateBrie(element)
          break
        case legendarySulfuras:
          updateSulfuras(element)
          break
        case tickets:
          updateTickets(element)
          break
        default:
          update(element)
          break
      }
    })

    return this.items
  }
}
module.exports = {
  Item,
  Shop,
  // Brie
}
