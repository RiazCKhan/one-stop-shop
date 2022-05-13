import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem"

import "./ShopList.css"

export default function ShopList(props) {

  const [shopData, setShopData] = useState([])
  const [newCost, setNewCost] = useState("")

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => {
        setShopData(response.data)
      }).catch((error) => {
        console.log('Error', error)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const onEdit = (id) => {
    const item = {
      id: id,
      cost: newCost
    }
    axios.put('/api/editItems', item)
      .then(() => {
        console.log("Sending Data to Backend, Item ID:", id)
      }).catch((error) => {
        console.log(error)
      })
  }

  const shopItem = shopData.map((item) => {
    return (
      <ShopListItem
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        cost={item.cost}
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