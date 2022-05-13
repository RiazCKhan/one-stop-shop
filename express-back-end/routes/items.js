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

    // db.query(`
    // UPDATE items
    // SET cost = $1
    // WHERE items.id = $2
    // `, [])
  })


  return router;
};
