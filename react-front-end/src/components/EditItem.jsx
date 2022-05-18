import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewItem from "./NewItem"
import axios from "axios";


export default function EditItem() {

  let { itemId } = useParams()


let singleItemRequest = {
  method: 'GET',
  url: `/api/item/${itemId}`
}

  useEffect(() => {
    axios.request(singleItemRequest)
    .then((res) => console.log('success'))
    .catch((error) => console.log('error'))
  }, [])

  return (
    <>
      <NewItem />
    </>
  )
}