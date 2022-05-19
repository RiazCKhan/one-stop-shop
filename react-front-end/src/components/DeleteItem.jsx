import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import DeleteListItem from "./DeleteListItem";
import axios from "axios";

import "./ShopList.css"

export default function DeleteItem() {
  const [deletedItem, setDeletedItem] = useState([]);
  const { itemId } = useParams();

  const singleDeletedItemRequest = {
    method: 'GET',
    url: `/api/item/${itemId}`
  };

  useEffect(() => {
    axios.request(singleDeletedItemRequest)
      .then((response) => setDeletedItem(response.data))
      .catch((error) => console.log('error', error))
  }, []);

  const confirmDelete = (id, comment) => {
    const item = {
      id,
      comment
    }
    console.log('Delete FN arguements', item)
    // axios.put('/api/deleteItem', item)
    // .then(() => alert('Item Deleted and Comment Stored'))
    // .catch(() => alert('Something went wrong...'))
  };

  const singleDeletedItemInfo = deletedItem.map((itemInfo) => {
    console.log('Returned Item from DB', singleDeletedItemInfo)
    return (
      <DeleteListItem
        key={itemInfo.id}
        id={itemInfo.id}
        title={itemInfo.title}
        description={itemInfo.description}
        cost={itemInfo.cost}
        confirmDelete={confirmDelete}
      />
    )
  })

  return (
    <>
      {singleDeletedItemInfo}
    </>
  )
}




