import { Link } from "react-router-dom";
import "./NewItem.css";

export default function DeleteListItem(props) {

  const { id, title, description, cost, comment, setComment, confirmDelete } = props
  return <>
    <form className="add-form-container">
      <h3>Item Deletion Page</h3>
      <label>{title}</label>

      <label>Item Description:
        <br></br>
        <span><small>{description}</small></span>
      </label>

      <label>Item Cost:
        <br></br>
        <span><small>$ {cost}</small></span>
      </label>

      <article className="delete-info-container">
        <h3>Provide Deletion Comment</h3>
        <input
        className="test"
          type="text"
          value={comment || ""}
          onChange={(event) => {
            setComment(event.target.value)
          }}
        />

        <p>Are you sure?</p>
          <button onClick={() => confirmDelete(id, comment)}>Confirm</button>
          <Link to={"/"}> <button onClick={() => console.log('close dialogue')}>Cancel</button></Link>
      </article>

    </form>
  </>
}

