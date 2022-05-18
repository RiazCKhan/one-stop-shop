import { Link } from "react-router-dom";
import Modal from "react-modal"
import "./ShopList.css"

Modal.setAppElement('#root')

export default function ShopListItem(props) {
  const { id, title, description, cost,
    onDelete, showModal, setShowModal,
    comment, setComment,
    handleSubmit } = props;

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
            <button onClick={() => setShowModal(true)}>Delete</button>
          </div>
        </form>
      </article>

      <article>
        <Modal isOpen={showModal}>
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
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      </article>
    </article>
  )
}