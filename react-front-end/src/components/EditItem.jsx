import NewItem from "./NewItem"
import { useParams } from "react-router-dom";


export default function EditItem(props) {

  console.log('what am i', useParams())

  return (
    <>
    <NewItem />
    </>
  )
}