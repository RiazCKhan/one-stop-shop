import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewItem from "./NewItem"
import axios from "axios";


export default function EditItem() {

  console.log('what am i', useParams())

  let { itemId } = useParams()
  console.log(itemId)

useEffect(() => {
  // axios.get(`/api/item/`)
})

  return (
    <>
    <NewItem />
    </>
  )
}