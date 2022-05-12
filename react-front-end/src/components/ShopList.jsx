import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem"

export default function ShopList() {

  const [shopData, setShopData] = useState([])

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => {
        setShopData(response.data)
      }).catch((error) => {
        console.log('Error', error)
      })
  }, [])

  const shopItem = shopData.map((item) => {
    console.log('hello', item)
    return (
      <ShopListItem
        key={item.id}
        title={item.title}
        description={item.description}
        cost={item.cost}
      />
    )
  })

  return (
    <>
      {shopItem}
    </>
  )
}