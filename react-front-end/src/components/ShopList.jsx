import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem"

import "./ShopList.css"

export default function ShopList() {
  const [shopData, setShopData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [comment, setComment] = useState("")
  const [page, setPage] = useState(false)

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => {
        setShopData(response.data)
      }).catch((error) => {
        console.log('Error', error)
      })
  }, [page]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onDelete = (id, comment) => {
    console.log('comment', comment)
    console.log('id', id)
    // axios.put('/api/deleteItem', { id })
    //   .then(() => setPage(true))
    //   .then(() => setPage(false))
    //   .catch((error) => console.log(error))

    setShowModal(false);
  };

  const shopItem = shopData.map((item) => {
    return (
      <ShopListItem
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        cost={item.cost}
        handleSubmit={handleSubmit}
        onDelete={onDelete}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    )
  })

  return (
    <section className="shop-items-container">
      {shopItem}
    </section>
  )
}