import "./ShopListItem.css"

export default function ShopListItem(props) {

const { title, description, cost } = props;

  return(
    <article className="item-card">
      <h1>{title}</h1>
      <h3>Image TBD</h3>
      <ul>
        <li>{description}</li>
        <li>{cost}</li>
      </ul>
    </article>
  )
}