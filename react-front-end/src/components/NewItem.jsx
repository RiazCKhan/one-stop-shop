import { useState } from "react"
import axios from "axios";

import "./NewItem.css";

export default function NewItem(props) {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCost, setItemCost] = useState("")

  const { editItemPage, title, description, cost } = props

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const submit = (itemName, itemDescription, itemCost) => {
    const item = {
      itemName,
      itemDescription,
      itemCost
    }
    axios.post('/api/newItems', item)
      .then(() => {
        alert('New Item Added!')
      }).catch((error) => {
        alert('Something went wrong...')
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="add-form-container">
      {editItemPage ? <h3>Edit Item</h3> : <h3>Add Item</h3>}
      <label>Item Name</label>
      <input
        type="text"
        value={itemName || title}
        onChange={(event) => {
          setItemName(event.target.value)
        }}
        placeholder="Item name.." />

      <label>Item Description</label>
      <input
        type="textarea"
        value={itemDescription || description}
        onChange={(event) => {
          setItemDescription(event.target.value)
        }}
        placeholder="Item Description" />

      <label>Item Cost</label>
      <input
        type="number"
        value={itemCost || cost}
        onChange={(event) => {
          setItemCost(event.target.value)
        }}
        placeholder="$$$" />

      <button onClick={() => { submit(itemName, itemDescription, itemCost) }}>Submit</button>
    </form>
  )
}