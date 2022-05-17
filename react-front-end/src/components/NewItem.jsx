import "./NewItem.css";

export default function NewItem() {



  // axios.put('/api/new', item)

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const submit = (itemName, itemDescription, itemCost) => {
    console.log('weep')
  }


  return (

    <form onSubmit={handleSubmit} className="add-form-container">
      <label>Item Name</label>
      <input type="text" placeholder="Item name.." />

      <label>Item Description</label>
      <input type="textarea" placeholder="Item Description" />

      <label>Item Cost</label>
      <input type="number" placeholder="$$$" />

      <button onClick={() => {submit()}}>
        Submit
      </button>
    </form>
  )
}