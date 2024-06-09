const DelayTime = 3 // 3 ms

const DefaultBasket = { x: 210, y: 255 }

const DefaultProduct = { x: 305, y: 185 }

const FirstRowSlotList = [
    { x: 300, y: 380 },
    { x: 370, y: 380 },
    { x: 440, y: 380 },
    { x: 510, y: 380 },
    { x: 580, y: 380 },
    { x: 650, y: 380 },
    { x: 720, y: 380 },
]

const SecondRowSlotList = [
    { x: 720, y: 160 },
    { x: 650, y: 160 },
    { x: 580, y: 160 },
    { x: 510, y: 160 },
    { x: 440, y: 160 },
    { x: 370, y: 160 },
    { x: 300, y: 160 },
    { x: 230, y: 160 },
]

const SellSlotList = [
    // [0, 1, 2, 3]
    // [4, 5, 6, 7]
    { x: 200, y: 165 },
    { x: 330, y: 165 },
    { x: 460, y: 165 },
    { x: 590, y: 165 },
    { x: 200, y: 340 },
    { x: 330, y: 340 },
    { x: 460, y: 340 },
    { x: 590, y: 340 },
]

const SellOptions = [
    { x: 430, y: 100 }, // Trees
    { x: 430, y: 170 }, // Goods
    { x: 430, y: 240 }, // Others
    { x: 430, y: 310 }, // Mineral
    { x: 430, y: 380 }, // Events
]

const PlantSlotList = [
    //[0, 1, 2]
    //[3, 4]
    { x: 130, y: 280 },
    { x: 200, y: 280 },
    { x: 270, y: 280 },
    { x: 130, y: 350 },
    { x: 200, y: 350 },
]

const MakeSlotList = [
    //[0, 1, 2]
    //   [3, 4]
    { x: 365, y: 70 },
    { x: 425, y: 70 },
    { x: 485, y: 70 },
    { x: 425, y: 130 },
    { x: 485, y: 130 },
]

const SellItemOptions = {
    tree: 0,
    goods: 1,
    other: 2,
    mineral: 3,
    events: 4,
}

module.exports = {
    DelayTime,
    DefaultBasket,
    DefaultProduct,
    FirstRowSlotList,
    SecondRowSlotList,
    SellSlotList,
    SellOptions,
    PlantSlotList,
    MakeSlotList,
    SellItemOptions,
}
