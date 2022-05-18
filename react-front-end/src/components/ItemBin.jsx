import { useState, useEffect } from "react"
import axios from "axios"

export default function ItemBin() {
const [deletedItems, setDeletedItems] = useState([])

  useEffect(() => {
    axios.get('/api/deletedItems')
      .then((response) => setDeletedItems(response.data))
      .catch((error) => console.log('Error', error))
  }, []);

console.log(deletedItems)

  return (
    <>
    </>
  )
}