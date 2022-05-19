import { Link } from "react-router-dom";

export default function DeleteListItem(props) {
  const { id, title, description, cost, comment, setComment, confirmDelete, handleSubmit } = props

  return <>
    <form onSubmit={handleSubmit} className="add-form-container">
      <h2 className="page-header">Item Deletion Page</h2>
      <label>{title}</label>

      <br></br>
      <label>Item Description:
        <span><small>{description}</small></span>
      </label>

      <label>Item Cost:
        <br></br>
        <span><small>$ {cost}</small></span>
      </label>

      <article className="delete-info-container">
        <h3>Provide Deletion Comment</h3>
        <input
          type="text"
          value={comment || ""}
          onChange={(event) => {
            setComment(event.target.value)
          }}
          required="required"
        />

        <p>Are you sure?</p>
        <button onClick={() => confirmDelete(id, comment)}>Confirm</button>
        <Link to={"/"}> <button onClick={() => console.log('close dialogue')}>Cancel</button></Link>
      </article>

    </form>
  </>
}

