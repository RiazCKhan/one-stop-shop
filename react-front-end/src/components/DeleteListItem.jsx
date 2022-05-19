import { Link } from "react-router-dom";
import "./NewItem.css";

export default function DeleteListItem(props) {

  const { id, title, description, cost, confirmDelete } = props
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

      <article>
        <h3>Provide Deletion Comment</h3>
        {/* <input
          type="text"
          value={comment || ""}
          onChange={(event) => {
            setComment(event.target.value)
          }}
        /> */}
        <p>Are you sure </p>
      </article>

      <button onClick={() => confirmDelete(id)}>Confirm</button>
      <Link to={"/"}> <button onClick={() => console.log('close dialogue')}>Cancel</button> </Link>
    </form>
  </>
}

