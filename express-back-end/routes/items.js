const router = require("express").Router();

module.exports = db => {
  router.get("/items", (req, res) => {
    db.query(`SELECT * FROM items`)
      .then(({ rows: items }) => {
        res.json(items);
      });
  })

  // Update Item Cost
  router.put("/editItems/", (req, res) => {
    console.log('Receive Data from Frontend', req.body)

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


  return router;
};
