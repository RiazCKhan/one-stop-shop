import "./NewItem.css";

export default function NewItem() {
  return (

    <form>
      <label for="item_name">Item Name</label>
      <input type="text" placeholder="Item name.." />

      <label for="item_desc">Item Description</label>
      <input type="text" placeholder="Item Description" />

      <label for="item_cost">Item Cost</label>
      <input type="number" placeholder="$$$" />

      <input type="submit" value="Submit" />
    </form>
  )
}