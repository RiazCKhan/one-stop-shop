import NewItem from "./NewItem"
import { useParams } from "react-router-dom";


export default function EditItem() {

  console.log('what am i', useParams())

  return (
    <>
    <NewItem />
    </>
  )
}