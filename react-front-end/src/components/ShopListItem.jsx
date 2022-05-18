import { Link } from "react-router-dom";
import "./ShopList.css"

export default function ShopListItem(props) {
  const { id, title, description, cost, onDelete, handleSubmit } = props;

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
          <div className="cost-apperance">
            $ {cost}
          </div>
          <div className="edit-input">
            <Link to={`/edit/${id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        </form>
      </article>
    </article>
  )
}