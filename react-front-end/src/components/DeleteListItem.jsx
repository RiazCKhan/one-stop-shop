export default function DeleteListItem(props) {

  const { id, title, description, cost, confirmDelete } = props
  return <>
    <form className="add-form-container">
      {/* {editItemPage ? <h3>Edit Item</h3> : <h3>Add Item</h3>}
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
        placeholder={description ? "New description" : "Item description..."} /> */}

      <button onClick={() => confirmDelete(id)}>Confirm</button>
      <button onClick={() => console.log('close dialogue')}>Close</button>
    </form>
  </>
}

    // <article>
    //   <h3>Provide Deletion Comment</h3>
    //   <input
    //     type="text"
    //     value={comment || ""}
    //     onChange={(event) => {
    //       setComment(event.target.value)
    //     }}
    //   />
    //   <p>Are you sure </p>

    // </article>