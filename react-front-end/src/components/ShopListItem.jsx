import "./ShopList.css"

export default function ShopListItem(props) {

  const { id, title, description, cost, onEdit, onDelete, newCost, setNewCost, handleSubmit } = props;

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
          <div className="cost-apperance">
          $ {cost}
          </div>
          <div className="edit-input">
            <input
              type="number"
              value={newCost[id] || ""}
              onChange={(event) => {
                setNewCost(newCostHandler(id, newCost, event.target.value))
              }}
            />
            <button onClick={() => onEdit(id)}>Update Cost</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        </form>
      </article>
    </article>
  )
}