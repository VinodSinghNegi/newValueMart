const validator = require('validator')
const mongoose = require("mongoose")

const prodAndItem = mongoose.model("prodAndItem", {
    userId: {
        type: String,
        require: true,

    },
    productName: {
        type: String,
        require: true,
        trim: true,
        uppercase: true
    }
})

module.exports = prodAndItem