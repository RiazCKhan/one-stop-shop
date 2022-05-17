import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <section className="nav-container">
      <Link to="/">
        <h3>All Items</h3>
      </Link>
      <h1>One Stop Shop</h1>
      <Link to="/new">
        <h3>Add Item</h3>
      </Link>
    </section>
  )
}