import { Link } from "react-router-dom";
import "../styles/CartComp.css";

const CartComp = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any products to your cart yet.
        </p>

        <Link to="/products" className="continue-shopping">
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((product) => (
            <article className="cart-item" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <div className="cart-item-info">
                <p className="cart-item-category">
                  {product.category}
                </p>

                <h2>{product.name}</h2>

                <p className="cart-item-price">
                  ₦{product.price.toLocaleString()}
                </p>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                    >
                      −
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="cart-item-subtotal">
                ₦{(
                  product.price * product.quantity
                ).toLocaleString()}
              </p>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>

            <span>
              {cart.reduce(
                (total, product) =>
                  total + product.quantity,
                0
              )}
            </span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>

            <span>
              ₦{total.toLocaleString()}
            </span>
          </div>

          <Link
            to="/checkout"
            className="checkout-button"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/products"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default CartComp;