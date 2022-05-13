import "./ShopList.css"

export default function ShopListItem(props) {

  const { id, title, description, cost, onEdit } = props;

  return (
    <article className="item-card">
      <h1>{title}</h1>
      <article>
        <div className="edit-card">
          {description}
        </div>
      </article>

      <article>
        <form className="edit-card">
          {cost}
          <div className="edit-input">
            <input type="number" />
            <button onClick={() => onEdit(id)}>Update Cost</button>
          </div>
        </form>
      </article>
    </article>
  )
}