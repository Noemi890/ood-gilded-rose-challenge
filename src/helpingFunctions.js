const qualityCheck = (item) => {
    if (item.quality > 50 && !item.name.includes('Sulfuras')) {
        item.quality = 50
    }
    else if (item.quality < 0 && !item.name.includes('Aged')) {
        item.quality = 0
    }
}

const update = (item) => {
    item.sellIn--
    if (item.sellIn < 0) {
        item.quality -= 2
    }
    else if (item.quality >= 0) {
        item.quality--
    }
    else {
        item.quality -= 2
    }

    qualityCheck(item)
}

const updateConjuredItem = (item) => {      
    item.sellIn--
    if (item.sellIn < 0) {
        item.quality -= 4
    }
    else if (item.sellIn >= 0) {
        item.quality -= 2
      }
  
      qualityCheck(item)
}

const updateBrie = (item) => {
    item.sellIn--
    
    if (item.sellIn < 0) {
    item.quality+= 2
    }
    else {
    item.quality++
    }

    qualityCheck(item)
}

const updateSulfuras = (item) => {
    if (item.sellIn > 0) {
        throw new Error('Can\'t be sold')
    }
}

const updateTickets = (item) => {
    item.sellIn--
    if (item.sellIn < 0) {
        item.quality = 0
    }
    else if (item.sellIn <= 5) {
        item.quality += 3
    }
    else if (item.sellIn <= 10) {
        item.quality += 2
    }
    else {
        item.quality++
    }
    qualityCheck(item)
}

module.exports = {update, updateBrie, updateConjuredItem, updateSulfuras, updateTickets}