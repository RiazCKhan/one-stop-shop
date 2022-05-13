import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem"

import "./ShopList.css"

export default function ShopList() {

  const [shopData, setShopData] = useState([])
  const [newCost, setNewCost] = useState("")
  const [page, setPage] = useState(false)

  useEffect(() => {
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

  const onEdit = (id) => {
    const item = {
      id: id,
      cost: newCost
    }
    axios.put('/api/editItems', item)
      .then(() => {
        console.log("Sending Data to Backend, Item ID:", id)
        setPage(true)
      })
      .then(() => {
        setPage(false)
      })
      .catch((error) => {
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