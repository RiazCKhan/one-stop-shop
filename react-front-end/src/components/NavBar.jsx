import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <section className="nav-container">
      <h1>One Stop Shop - Admin Panel</h1>
      <Link to="/">
        <h3>All Items</h3>
      </Link>
      <Link to="/new">
        <h3>Add Item</h3>
      </Link>
      <Link to="/bin">
        <h3>Deleted Items</h3>
      </Link>
    </section>
  )
}