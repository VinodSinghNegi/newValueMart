const express = require("express");
const userDB = require("../models/signup");
const productDB = require("../models/product");
const itemsDB = require('../models/selectedItems')
const quantityDB = require('../models/quantity')
const router = new express.Router();

//editing items of selected product

router.post("/edititems", async (req, res) => {
  const productId = req.body.productId
  const productName = req.body.productName
  const itemList = req.body.itemList
  itemList.map(element => {
    itemsDB.insertMany({ productId: productId, item: element, productName: productName })
  }
  )
})

//deleting selected product 

router.post("/deleteproduct", async (req, res) => {
  const productId = req.body.productId
  await itemsDB.deleteMany({ productId: productId })
  await productDB.findOneAndDelete({ _id: productId })

})

//showing all products

router.post("/showproduct", async (req, res) => {

  const userId = req.body.userId
  const productId = req.body.productId
  if (userId) {
    const findProducts = await productDB.find({ userId })
    res.send(findProducts)
  }
  else if (productId) {
    const findProducts = await productDB.findOne({ _id: productId })
    res.send(findProducts)
  }


})

//deleting selected items

router.post("/deleteitems", async (req, res) => {
  const itemId = req.body.itemId
  await itemsDB.findOneAndDelete({ _id: itemId })
})

//editing product name
router.post("/editproductname", async (req, res) => {
  const productId = req.body.productId
  const newName = req.body.newName

  await productDB.findByIdAndUpdate(productId, { productName: newName })

  await itemsDB.update({ productId: productId }, { productName: newName })

})


//showing items according to product id

router.post("/showitems", async (req, res) => {
  const productId = req.body.productId
  const findItems = await itemsDB.find({ productId })
  res.send(findItems)
})

/// saving quantity


router.post("/setquantity", async (req, res) => {


  // const productName = req.body.productName;
  const productId = req.body.productId
  const idAndQuantity = req.body.itemQuantity
  console.log("quantity ", idAndQuantity)

  const response = await itemsDB.find({ productId })
  console.log(response)

  var itemId = []

  await response.map(item => {
    itemId = [...itemId, item._id]

  })
  console.log(itemId)


  var reeee = await idAndQuantity.map((element, i) => {
    itemsDB.update({ _id: itemId[i] }, { quantity: element[0].count })

  })
  console.log(reeee)

})



//saving selected product and items

router.post("/items", async (req, res) => {
  const getUserId = req.body.userId;
  const getProduct = req.body.productName;
  const getItem = req.body.itemList;
  const idAndQuantity = req.body.itemQuantity

  var productId = null

  const findUser = await productDB.findOne({ userId: getUserId })
  if (findUser !== null) {
    try {
      await productDB.insertMany({ userId: getUserId, productName: getProduct });

      const productData = await productDB.findOne({ productName: getProduct });
      productId = productData._id

    } catch (e) {
      res.send("error");
    }

  }
  else {
    const products = new productDB(req.body)
    await products.save()

    const productData = await productDB.findOne({ userId: getUserId })
    productId = productData._id


  }

  await getItem.map(element => {
    itemsDB.insertMany({ productId: productId, item: element, productName: getProduct })
  })
  res.send(productId)





});



module.exports = router;
