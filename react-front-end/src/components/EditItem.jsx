import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import NewItem from "./NewItem"
import axios from "axios";


export default function EditItem() {
  const [item, setItem] = useState([])
  const { itemId } = useParams();

  const singleItemRequest = {
    method: 'GET',
    url: `/api/item/${itemId}`
  };

  useEffect(() => {
    axios.request(singleItemRequest)
      .then((response) => setItem(response.data))
      .catch((error) => console.log('error', error))
  }, []);

  const onEdit = (id, title, description, cost) => {
    if (!title, !description, !cost) {
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

  const singleItemInfo = item.map((itemInfo) => {
    return (
      <NewItem
        key={itemInfo.id}
        id={itemInfo.id}
        editItemPage={'Edit Item Page'}
        title={itemInfo.title}
        description={itemInfo.description}
        cost={itemInfo.cost}
        onEdit={onEdit}
      />
    )
  })

  return (
    <>
      {singleItemInfo}
    </>
  )
}