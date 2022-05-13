const router = require("express").Router();
 
module.exports = (db) => {

 router.put("/editItems/", (req, res) => {

  console.log('data on back end', req.body)

  db.query(`
  UPDATE items
  SET cost = $1
  WHERE items.id = $2
  `, [])

})

return router;
};