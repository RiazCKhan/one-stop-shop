import "./ShopList.css"

export default function ShopListItem(props) {

  const { title, description, cost } = props;

  return (
    <article className="item-card">
      
      <h1>{title}</h1>
      <h3>Image TBD</h3>

      <article>
        <div>
        {description}
        <button>Edit Description</button>
        </div>
      </article>

      <article>
        <div>
        {cost}
        <button>Update Cost</button>
        </div>
      </article>

    </article>
  )
}