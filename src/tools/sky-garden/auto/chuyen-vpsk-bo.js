const core = require('../core')
const { EventKeys } = require('../const')

// Chuyen bo
module.exports = async (driver) => {
    await core.sellEventItems(driver, EventKeys.bo, false)
}