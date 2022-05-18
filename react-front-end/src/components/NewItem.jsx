import { useState } from "react"
import axios from "axios";

import "./NewItem.css";

export default function NewItem(props) {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemCost, setItemCost] = useState("")

  const { editItemPage, id, title, description, cost, onEdit } = props

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
      {title ? <label>{title}</label> : <label>Item Name</label>}
      <input
        type="text"
        value={itemName || ""}
        onChange={(event) => {
          setItemName(event.target.value)
        }}
        required="required"
        placeholder={title ? "New item name" : "Item name..."} />

      {editItemPage ?
        <label className="">Item Description:
          <br></br>
          <span><small>{description}</small></span>
        </label> :
        <label>Item Description</label>}
      <input
        type="textarea"
        value={itemDescription || ""}
        onChange={(event) => {
          setItemDescription(event.target.value)
        }}
        required="required"
        placeholder={description ? "New description" : "Item description..."} />

      {editItemPage ?
        <label>Item Cost:
          <br></br>
          <span><small>$ {cost}</small></span>
        </label> :
        <label>Item Cost</label>}
      <input
        type="number"
        value={itemCost || ""}
        onChange={(event) => {
          setItemCost(event.target.value)
        }}
        required="required"
        placeholder={cost ? "New cost" : "Item cost..."} />

      {editItemPage ?
        <button onClick={() => { onEdit(id, itemName, itemDescription, itemCost) }}>Update</button> :
        <button onClick={() => { submit(itemName, itemDescription, itemCost) }}>Submit</button>}
    </form>
  )
}