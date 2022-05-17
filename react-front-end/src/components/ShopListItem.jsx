import "./ShopList.css"

export default function ShopListItem(props) {

  const { id, title, description, cost, onEdit, newCost, setNewCost, handleSubmit } = props;

  const newCostHandler = (id, newCost, value) => {
    let newCostCopy = Object.assign({}, newCost)
    newCostCopy[id] = value
    return newCostCopy
  }

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
          {cost}
          <div className="edit-input">
            <input
              type="number"
              value={newCost[id] || ""}
              onChange={(event) => {
                setNewCost(newCostHandler(id, newCost, event.target.value))
              }}
            />
            <button onClick={() => onEdit(id)}>Update Cost</button>
          </div>
        </form>
      </article>
    </article>
  )
}