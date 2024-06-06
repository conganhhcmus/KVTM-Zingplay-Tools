const core = require('./core')
const { ADBHelper } = require('../../lib/adb')

const { SellItemOptions } = require('./constant')

//#region hat dua say + nuoc chanh
const produceItems_1 = async (deviceId, monkey, hasEventTree, isLast) => {
    // Plant tree
    await core.goUp(monkey)
    await core.nextTrees(deviceId, monkey, 'dua-hau')
    await core.plantTrees(monkey, hasEventTree ? 4 : 0) // trong dua hau
    await core.goUp(monkey, 2)
    await core.plantTrees(monkey, hasEventTree ? 0 : 1) // trong chanh

    await core.goDownLast(monkey)
    await core.sleep(monkey, 6.5)

    await core.goUp(monkey)
    await core.harvestTrees(monkey)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)

    await core.goDownLast(monkey)

    // make item
    await core.goUp(monkey)
    await core.makeItemFloor1(monkey, 4, 4)
    await core.makeItemFloor2(monkey, 3, 3)

    await core.goDownLast(monkey)
    if (!isLast) await core.sleep(monkey, 9)
}

const sellItems_1 = async (deviceId, monkey) => {
    // Sell Goods
    const slotA = [0, 1, 2, 3, 4, 5, 6]
    const slotB = []
    const slotC = []
    await core.sellItems(deviceId, monkey, slotA, slotB, slotC, SellItemOptions.goods, [
        { key: 'hat-dua-say', value: 4 },
        { key: 'nuoc-chanh', value: 3 },
    ])
}
//#endregion

//#region tinh dau dua + tra hoa hong
const produceItems_2 = async (deviceId, monkey, hasEventTree, isLast) => {
    // trong tuyet
    await core.goUp(monkey)
    await core.prevTrees(deviceId, monkey, 'tuyet')
    await core.plantTrees(monkey, hasEventTree ? 3 : 4)
    await core.goUp(monkey, 2)
    await core.plantTrees(monkey, hasEventTree ? 3 : 4)

    // trong dua
    await core.goUp(monkey, 2)
    await core.nextTrees(deviceId, monkey, 'dua')
    await core.plantTrees(monkey, hasEventTree ? 1 : 2)
    await core.goUp(monkey, 2)
    await core.plantTrees(monkey, hasEventTree ? 1 : 2)
    await core.goUp(monkey, 2)
    await core.plantTrees_Half(monkey, hasEventTree ? 1 : 2)
    await core.goDownLast(monkey)

    // trong tuyet
    await core.goUp(monkey)
    await core.harvestTrees(monkey)
    await core.prevTrees(deviceId, monkey, 'tuyet')
    await core.plantTrees(monkey, hasEventTree ? 3 : 4)

    // trong hong
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.plantTrees(monkey, 2)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.plantTrees_Half(monkey, 2)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.goDownLast(monkey)

    // san xuat vat pham
    await core.goUp(monkey)
    await core.harvestTrees(monkey)
    await core.makeItemFloor1(monkey, 0, 6)
    await core.makeItemFloor2(monkey, 1, 3)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.makeItemFloor1(monkey, 3, 6)
    await core.makeItemFloor2(monkey, 0, 3)
    await core.goDownLast(monkey)
}

const sellItems_2 = async (deviceId, monkey) => {
    // Sell Goods
    const slotA = [0, 1, 2, 3, 4, 5, 6, 7]
    const slotB = []
    const slotC = [1]
    await core.sellItems(deviceId, monkey, slotA, slotB, slotC, SellItemOptions.goods, [
        { key: 'tinh-dau-dua', value: 6 },
        { key: 'tra-hoa-hong', value: 3 },
    ])
}

//#endregion

//#region tinh dau dua + nuoc chanh
const produceItems_3 = async (deviceId, monkey, hasEventTree, isLast) => {
    // Plant tree
    await core.goUp(monkey)
    await core.prevTrees(deviceId, monkey, 'tuyet')
    await core.plantTrees(monkey, hasEventTree ? 3 : 4) // trong tuyet
    await core.goUp(monkey, 2)
    await core.nextTrees(deviceId, monkey, 'chanh')
    await core.plantTrees(monkey, hasEventTree ? 0 : 1) // trong chanh
    await core.goUp(monkey, 2)
    await core.plantTrees(monkey, hasEventTree ? 1 : 2) // trong dua
    await core.goUp(monkey, 2)
    await core.plantTrees_Half(monkey, hasEventTree ? 1 : 2, 3) // trong dua

    await core.goDownLast(monkey)
    await core.sleep(monkey, 4)

    await core.goUp(monkey)
    await core.harvestTrees(monkey)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)
    await core.goUp(monkey, 2)
    await core.harvestTrees(monkey)

    await core.goDownLast(monkey)

    // make item
    await core.goUp(monkey)
    await core.makeItemFloor2(monkey, 3, 3)
    await core.goUp(monkey, 4)
    await core.makeItemFloor1(monkey, 3, 3)

    await core.goDownLast(monkey)
}

const sellItems_3 = async (deviceId, monkey) => {
    // Sell Goods
    const slotA = [0, 1, 2, 4, 5, 6]
    const slotB = []
    const slotC = []
    await core.sellItems(deviceId, monkey, slotA, slotB, slotC, SellItemOptions.goods, [
        { key: 'tinh-dau-dua', value: 3 },
        { key: 'nuoc-chanh', value: 3 },
    ])
}
//#endregion

const plantEventTree = async (monkey) => {
    await core.goUp(monkey)

    // trong cay
    for (let j = 0; j < 4; j++) {
        await core.plantTrees(monkey, 4)
        await core.goUp(monkey, 2)
    }
    await core.plantTrees(monkey, 4)

    // xuong tang thap nhat
    await core.goDownLast(monkey)
    await core.goUp(monkey)

    // thu hoach cay
    for (let j = 0; j < 4; j++) {
        await core.harvestTrees(monkey)
        await core.goUp(monkey, 2)
    }
    await core.harvestTrees(monkey)
    // xuong tang thap nhat
    await core.goDownLast(monkey)
}

// export function

const openGame = async (isRunning, deviceId, gameOptions = {}, index) => {
    if (isRunning && !isRunning(deviceId)) {
        return
    }

    const monkey = await ADBHelper.openMonkey(deviceId)

    const { openGame, openGameAfter } = gameOptions
    const needOpen = openGame && index % openGameAfter == 0
    needOpen && (await core.openGame(deviceId, monkey))
    return monkey.close()
}

const openChests = async (isRunning, deviceId, gameOptions = {}) => {
    if (isRunning && !isRunning(deviceId)) {
        return
    }

    const { openChests } = gameOptions
    const monkey = await ADBHelper.openMonkey(deviceId)

    openChests && (await core.openChests(deviceId, monkey))
    return monkey.close()
}

const produceItems = async (isRunning, deviceId, gameOptions = {}, index, auto, gameName) => {
    if (isRunning && !isRunning(deviceId)) {
        return
    }

    const { runAuto, hasEventTree } = gameOptions
    const isLast = index === 9
    const monkey = await ADBHelper.openMonkey(deviceId)

    switch (runAuto) {
        case auto[gameName][0].key:
            await produceItems_1(deviceId, monkey, hasEventTree, isLast)
            break

        case auto[gameName][1].key:
            await produceItems_2(deviceId, monkey, hasEventTree, isLast)
            break

        case auto[gameName][2].key:
            await produceItems_3(deviceId, monkey, hasEventTree, isLast)
            break

        default:
            await plantEventTree(monkey)
            break
    }
    return monkey.close()
}

const sellItems = async (isRunning, deviceId, gameOptions, auto, gameName) => {
    if (isRunning && !isRunning(deviceId)) {
        return
    }

    const { runAuto, sellItems } = gameOptions
    if (!sellItems) return

    const monkey = await ADBHelper.openMonkey(deviceId)
    switch (runAuto) {
        case auto[gameName][0].key:
            await sellItems_1(deviceId, monkey)
            break

        case auto[gameName][1].key:
            await sellItems_2(deviceId, monkey)
            break

        case auto[gameName][2].key:
            await sellItems_3(deviceId, monkey)
            break

        default:
            break
    }
    return monkey.close()
}

module.exports = {
    openGame,
    openChests,
    produceItems,
    sellItems,
}
