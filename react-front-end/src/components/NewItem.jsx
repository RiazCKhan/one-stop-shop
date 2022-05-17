import "./NewItem.css";

export default function NewItem() {
  return (

    <form className="add-form-container">
      <label for="item_name">Item Name</label>
      <input type="text" placeholder="Item name.." />

      <label for="item_desc">Item Description</label>
      <input type="textarea" placeholder="Item Description" />

      <label for="item_cost">Item Cost</label>
      <input type="number" placeholder="$$$" />

      <input type="submit" value="Submit" />
    </form>
  )
}