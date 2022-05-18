import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewItem from "./NewItem"
import axios from "axios";


export default function EditItem() {

  let { itemId } = useParams();


  let singleItemRequest = {
    method: 'GET',
    url: `/api/item/${itemId}`
  };

  useEffect(() => {
    axios.request(singleItemRequest)
      .then((response) => console.log(response.data))
      .catch((error) => console.log('error', error))
  }, []);

  return (
    <>
      <NewItem title={'title'} />
    </>
  )
}