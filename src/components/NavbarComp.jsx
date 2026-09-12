import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavbarComp({ cart }) {
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Wishlist", path: "/wishlist" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="navbar">
     {navItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === "/"}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        {item.name === "Cart" 
        ? `${item.name} (${cartCount})` 
        : item.name}
      </NavLink>
    ))}
    </nav>
  );
}

export default NavbarComp;