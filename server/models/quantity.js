const mongoose = require("mongoose")

const itemQuantity = mongoose.model("itemQuantity", {
    itemId: {
        type: String,
        require: true,

    },
    itemName:{
        type: String,
        require: true,
    },
    quantity:{
        type:Number,
        require:true
    }
})

module.exports = itemQuantity