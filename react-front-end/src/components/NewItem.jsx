import { useState } from "react"
import axios from "axios";

import "./NewItem.css";

export default function NewItem() {

  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCost, setItemCost] = useState("")

  
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  console.log(itemName)
  
  const submit = (itemName, itemDescription, itemCost) => {
    const item = {
      itemName,
      itemDescription,
      itemCost
    }
    axios.put('/api/new', item)
    .then(() => {
      // alert('New Item Added!')
    }).catch((error) => {
      // alert('Something went wrong...')
      console.log(error)
    })
  }


  return (

    <form onSubmit={handleSubmit} className="add-form-container">
      <label>Item Name</label>
      <input
        type="text"
        value={itemName || ""}
        onChange={(event) => {
          setItemName(event.target.value)
        }}
        placeholder="Item name.." />

      <label>Item Description</label>
      <input
        type="textarea"
        value={itemDescription || ""}
        onChange={(event) => {
          setItemDescription(event.target.value)
        }}
        placeholder="Item Description" />

      <label>Item Cost</label>
      <input
        type="number"
        value={itemCost || ""}
        onChange={(event) => {
          setItemCost(event.target.value)
        }}
        placeholder="$$$" />

      <button onClick={() => { submit(itemName, itemDescription, itemCost) }}>
        Submit
      </button>
    </form>
  )
}