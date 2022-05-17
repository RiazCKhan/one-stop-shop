import { useState } from "react"

import "./NewItem.css";

export default function NewItem() {

  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCost, setItemCost] = useState("")

  // axios.put('/api/new', item)

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  console.log(itemName)

  const submit = (itemName, itemDescription, itemCost) => {
    console.log('weep')
    const item = {
      itemName,
      itemDescription,
      itemCost
    }
    console.log('this is the form item', item)
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