const router = require("express").Router();

module.exports = db => {
  router.get("/items", (req, res) => {
    db.query(`SELECT * FROM items`)
      .then(({ rows: items }) => {
        res.json(items);
      });
  })

  // Add Item
  router.post("/newItems/", (req, res) => {
    const itemName = req.body.itemName
    const itemDescription = req.body.itemDescription
    const itemCost = req.body.itemCost

    db.query(`
    INSERT INTO items (title, description, cost) 
    VALUES ($1::VARCHAR, $2::VARCHAR, $3::INT)
    `, [itemName, itemDescription, itemCost])
      .then(() => {
        res.status(204).json({})
        console.log("Item Added")
      }).catch((error) => {
        console.log('Cost Update Error', error)
      })
  })

  // Update Item Cost
  router.put("/editItems/", (req, res) => {
    const cost = req.body.cost
    const id = req.body.id

    db.query(`
    UPDATE items
    SET cost = $1
    WHERE items.id = $2
    `, [cost, id])
      .then(() => {
        res.status(204).json({})
        console.log("Cost Updated")
      }).catch((error) => {
        console.log('Cost Update Error', error)
      })
  })

  // Delete Item
  router.delete("/deleteItem/", (req, res) => {
    console.log(req.body)
  })

  return router;
};
