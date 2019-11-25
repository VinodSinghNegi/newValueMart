const validator = require('validator')
const mongoose = require("mongoose")

const itemsSelected = mongoose.model("itemsSelected", {
    productId: {
        type: String,
        require: true,

    },
    item: {},
    productName: {
        type: String,
        uppercase: true
    },
    quantity: {}
})

module.exports = itemsSelected