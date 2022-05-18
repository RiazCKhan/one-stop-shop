const router = require("express").Router();

module.exports = db => {
  // Retrieve ALL Items
  router.get("/items", (req, res) => {
    db.query(`SELECT * FROM items WHERE is_deleted = false`)
      .then(({ rows: items }) => {
        res.json(items);
      });
  })

  // Retrieve Single Item to Edit
  router.get("/item/:id", (req, res) => {
    const id = req.params.id

    db.query(`
      SELECT * FROM items 
      WHERE id = $1
      AND is_deleted = false`, [id])
      .then(({ rows: item }) => {
        res.json(item);
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
        console.log('Item Add Error', error)
      })
  });

  // Update Item
  router.put("/editItems/", (req, res) => {
    console.log(req.body)
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    const cost = req.body.cost

    db.query(`
    UPDATE items
    SET 
    title = $1,
    description = $2,
    cost = $3
    WHERE id = $4
    `, [title, description, cost, id])
      .then(() => {
        res.status(204).json({})
        console.log("Item Updated")
      }).catch((error) => {
        console.log('Item Update Error', error)
      })
  })

  // Delete Item + Add Comment
  router.put("/deleteItem/", (req, res) => {
    const id = req.body.id
    const comment = req.body.comment
    const setDelete = true

    db.query(`
    UPDATE items
    SET 
    is_deleted = $1,
    comment = $2
    WHERE id = $3
    `, [setDelete, comment, id])
      .then(() => {
        res.status(204).json({})
        console.log("Item Deleted")
      }).catch((error) => {
        console.log('Item Deletion Error', error)
      })
  })

  return router;
};
