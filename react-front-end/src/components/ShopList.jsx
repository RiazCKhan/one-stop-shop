import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem"

import "./ShopList.css"

export default function ShopList() {
  const [shopData, setShopData] = useState([])

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => setShopData(response.data))
      .catch((error) => console.log('Error', error))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
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
      />
    )
  })

  return (
    <>
      <h2 className="page-header">All Items Page</h2>
      <section className="shop-items-container">
        {shopItem}
      </section>
    </>
  )
}