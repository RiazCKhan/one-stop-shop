import { Link } from "react-router-dom";
import "./ShopList.css"

export default function ShopListItem(props) {
  const { id, title, description, cost, handleSubmit,
    onDelete, comment, setComment, bin, deletionComment, onRestore } = props;

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
            {bin ? null : <Link to={`/delete/${id}`}><button>Delete</button></Link>}
          </div>

        </form>
      </article>
    </article>
  )
}