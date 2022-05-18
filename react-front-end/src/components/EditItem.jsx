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

  const singleItemInfo = item.map((itemInfo) => {
    return (
      <NewItem
        key={itemInfo.id}
        id={itemInfo.id}
        editItemPage={'Edit Item Page'}
        title={itemInfo.title}
        description={itemInfo.description}
        cost={itemInfo.cost}
      />
    )
  })

  return (
    <>
      {singleItemInfo}
    </>
  )
}