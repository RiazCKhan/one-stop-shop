import "./ShopList.css"

export default function ShopListItem(props) {

  const { title, description, cost } = props;

  return (
    <article className="item-card">

      <h1>{title}</h1>

      <article>
        <div className="edit-card">
        {description}
        <button>Edit Description</button>
        </div>
      </article>

      <article>
        <div className="edit-card">
        {cost}
        <button>Update Cost</button>
        </div>
      </article>

    </article>
  )
}