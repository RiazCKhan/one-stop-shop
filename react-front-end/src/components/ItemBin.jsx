import { useState, useEffect } from "react"
import axios from "axios"
import ShopListItem from "./ShopListItem";

import "./ShopList.css"

export default function ItemBin() {
const [deletedItems, setDeletedItems] = useState([])

  useEffect(() => {
    axios.get('/api/deletedItems')
      .then((response) => setDeletedItems(response.data))
      .catch((error) => console.log('Error', error))
  }, []);

  const onRestore = (id) => {
    axios.put('/api/restoreItem/', { id })
  }

const binItems = deletedItems.map((item) => {
  return (
    <ShopListItem 
    key={item.id}
    id={item.id}
    title={item.title}
    description={item.description}
    cost={item.cost}
    deletionComment={item.comment}
    bin={item.is_deleted}
    onRestore={onRestore}
    />
  )
})

  return (
    <>
    <h2 className="page-header">List of All Deleted Items</h2>
    {binItems}
    </>
  )
}