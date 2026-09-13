import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
  }

  if (cart.length === 0) {
    return (
      <main className="checkout-page empty-checkout">
        <h1>Your Cart is Empty</h1>

        <p>
          Add some products before proceeding to checkout.
        </p>

        <Link to="/products">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Delivery Information</h2>

          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Delivery Address
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">
            Place Order
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.map((product) => (
            <div
              className="checkout-item"
              key={product.id}
            >
              <span>
                {product.name} × {product.quantity}
              </span>

              <span>
                ₦{(
                  product.price * product.quantity
                ).toLocaleString()}
              </span>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>

            <span>
              ₦{total.toLocaleString()}
            </span>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;