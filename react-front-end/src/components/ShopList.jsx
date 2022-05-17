import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem"

import "./ShopList.css"

export default function ShopList() {

  const [shopData, setShopData] = useState([])
  const [newCost, setNewCost] = useState({}) // set new cost to an object, indexed based on shop data id
  const [page, setPage] = useState(false)


  useEffect(() => {
    console.log("[useEffect]: page " + page)
    axios.get('/api/items')
      .then((response) => {
        setShopData(response.data)
      }).catch((error) => {
        console.log('Error', error)
      })
  }, [page])

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  console.log("new cost: ", newCost)

  const newCostHandler = (id, newCost) => {
    // let newCostCopy = { ...newCost }
    let newCostCopy = Object.assign({}, newCost)
    newCostCopy[id] = ""
    return newCostCopy
  }

  const onEdit = (id) => {
    const item = {
      id: id,
      cost: newCost[id]
    }
    axios.put('/api/editItems', item)
      .then(() => {
        setPage(true);
        // newCost[id] = "" // clear the new cost id
        // setNewCost(newCost);
      })
      .then(() => {
        setNewCost(newCostHandler(id, newCost))
        setPage(false);
      })
      .catch((error) => {
        console.log(error)
      })

  }

  const shopItem = shopData.map((item) => {
    console.log("[shopData.map] " + newCost)
    return (
      <ShopListItem
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        cost={item.cost}
        newCost={newCost}
        onEdit={onEdit}
        setNewCost={setNewCost}
        handleSubmit={handleSubmit}
      />
    )
  })

  return (
    <section className="shop-items-container">
      {shopItem}
    </section>
  )
}