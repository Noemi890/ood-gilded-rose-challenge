var {Shop, Item} = require('../src/gilded_rose');

describe("Gilded Rose", function() {

  it('Aged Brie is gaining more value the older it gets', () => {
    const item = new Item('Aged Brie', 2, 0)
    const gildedRose = new Shop([item])
    const expected = [
      new Item(
        'Aged Brie',
        1,
        1
      )
    ]
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('degrades overtime', () => {
    const item = new Item('Elixir of Mongose', 5, 7)
    const gildedRose = new Shop([item])
    const expected = [
      new Item(
        'Elixir of Mongose',
        4,
        6
      )
    ]
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('degrades faster once the sellIn has passed', () => {
    const item = new Item('Elixir of Mongose', 0, 7)
    const gildedRose = new Shop([item])
    const expected = [
      new Item(
        'Elixir of Mongose',
        -1,
        5
      )
    ]
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected)
  })

  it("quality doesn't get below 0", () => {
    const item = new Item('Elixir of Mongose', 3, 0)
    const gildedRose = new Shop([item])
    const expected = [
      new Item(
        'Elixir of Mongose',
        2,
        0
      )
    ]
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('quality of item is never above 50', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50)
    const gilded_rose = new Shop([item])
    const expected = [
      new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        1,
        50
      )
    ]
    const result = gilded_rose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('Sulfuras doesn\'t decreases in quality', () => {
    const item = new Item('Sulfuras, Hand of Ragnaros', -1, 50)
    const gilded_rose = new Shop([item])
    const expected = [
      new Item(
        'Sulfuras, Hand of Ragnaros',
        -1,
        50
      )
    ]
    const result = gilded_rose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('Backstage passes quality increase by 2 where there are less than 10 days from concert', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 8, 30)
    const gilded_rose = new Shop([item])
    const expected = [
      new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        7,
        32
      )
    ]
    const result = gilded_rose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('Backstage passes quality increase by 3 where there are less than 5 days from concert', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)
    const gilded_rose = new Shop([item])
    const expected = [
      new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        3,
        33
      )
    ]
    const result = gilded_rose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('Backstage passes quality drops to 0 after the concert', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
    const gilded_rose = new Shop([item])
    const expected = [
      new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        -1,
        0
      )
    ]
    const result = gilded_rose.updateQuality()
    expect(result).toEqual(expected)
  })

  it('Conjured Items degrade twice as normal', () => {
    const item = new Item('Conjured Mana Cake', 3, 6)
    const gilded_rose = new Shop([item])
    const expected = [
      new Item(
        'Conjured Mana Cake',
        2,
        4
      )
    ]
    const result = gilded_rose.updateQuality()
    expect(result).toEqual(expected)
  })


});
