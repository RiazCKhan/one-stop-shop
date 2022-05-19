import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import DeleteListItem from "./DeleteListItem";
import axios from "axios";

export default function DeleteItem() {
  const [deletedItem, setDeletedItem] = useState([]);
  const { deletedItemId } = useParams();


  const singleDeletedItemRequest = {
    method: 'GET',
    url: `/api/item/${deletedItemId}`
  };

  useEffect(() => {
    axios.request(singleDeletedItemRequest)
      .then((response) => setDeletedItem(response.data))
      .catch((error) => console.log('error', error))
  }, []);

  const onDelete = (id, title, description, cost) => {
    if (!title || !description || !cost) {
      return null
    }

    const item = {
      id,
      title,
      description,
      cost
    }
    axios.put('/api/editItems', item)
      .then(() => alert('Item Edit Successful'))
      .catch(() => alert('Something went wrong...'))
  };

    const singleDeletedItemInfo = deletedItem.map((itemInfo) => {
      return (
        <DeleteListItem
          key={itemInfo.id}
          id={itemInfo.id}
          title={itemInfo.title}
          description={itemInfo.description}
          cost={itemInfo.cost}
        />
      )
    })

  return (
    <>
      Hello
      {singleDeletedItemInfo}
    </>
  )
}




