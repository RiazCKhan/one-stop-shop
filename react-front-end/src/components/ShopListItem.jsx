import { Link } from "react-router-dom";
import "./ShopList.css"

export default function ShopListItem(props) {
  const { id, title, description, cost,
    onDelete, comment, setComment,
    handleSubmit, bin,
    deletionComment, onRestore } = props;


  return (
    <article className="item-card">
      <h1>{title}</h1>
      <article>
        <div className="edit-card">
          {description}
        </div>
      </article>

      <article>
        <form onSubmit={handleSubmit} className="edit-card">
          <div className="center-space">
            $ {cost}
          </div>
          {bin && <p className="center-space">Deletion Comment: {deletionComment}</p>}
          <div className="edit-input">
            {bin ? <button onClick={() => { onRestore(id) }}>Restore</button> : <Link to={`/edit/${id}`}><button>Edit</button></Link>}
            {bin ? null : <button onClick={() => console.log('delete button')}>Delete</button>}
          </div>
        </form>
      </article>

      <article>
        <h3>Optional: Add Deletion Comment</h3>
        <input
          type="text"
          value={comment || ""}
          onChange={(event) => {
            setComment(event.target.value)
          }}
        />
        <p>Are you sure </p>
        <button onClick={() => onDelete(id, comment)}>Confirm</button>
        <button onClick={() => console.log('close dialogue')}>Close</button>
      </article>

    </article>
  )
}