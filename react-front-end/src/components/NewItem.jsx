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

  const reset = () => {
    setItemName("")
    setItemDescription("")
    setItemCost("")
  }

  const onAdd = (itemName, itemDescription, itemCost) => {
    const item = {
      itemName,
      itemDescription,
      itemCost
    }
    axios.post('/api/newItems', item)
      .then(() => alert('New Item Added!'))
      .catch(() => alert('Something went wrong...'))

    reset();
  }

  const editHandler = () => {
    onEdit(id, itemName, itemDescription, itemCost);
    reset();
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
        <button onClick={() => { editHandler() }}>Update</button> :
        <button onClick={() => { onAdd(itemName, itemDescription, itemCost) }}>Add</button>}
    </form>
  )
}