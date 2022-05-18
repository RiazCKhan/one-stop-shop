import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem";

export default function ItemBin() {
const [deletedItems, setDeletedItems] = useState([])

  useEffect(() => {
    axios.get('/api/deletedItems')
      .then((response) => setDeletedItems(response.data))
      .catch((error) => console.log('Error', error))
  }, []);

const binItems = deletedItems.map((item) => {
  console.log(item)
  return (
    <ShopListItem 
    key={item.id}
    id={item.id}
    title={item.title}
    description={item.description}
    cost={item.cost}
    bin={item.is_deleted}
    />
  )
})

  return (
    <>
    {binItems}
    </>
  )
}