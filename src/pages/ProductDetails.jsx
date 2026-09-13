import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/Products";
import "../styles/ProductDetails.css";


const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product not found</h1>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="product-details">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="product-details-content">
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-info">
          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-details-price">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="product-details-brand">
            Brand: {product.brand}
          </p>

          <p className="product-details-rating">
            ⭐ {product.rating} / 5
          </p>

          <p className="product-details-stock">
            {product.stock > 0
              ? `${product.stock} items available`
              : "Out of stock"}
          </p>

          <p className="product-details-description">
            {product.description ||
              "This is a quality product selected to give you great value and a satisfying shopping experience."}
          </p>

          <div className="quantity-selector">
            <button
              onClick={() =>
                setQuantity((currentQuantity) =>
                  Math.max(1, currentQuantity - 1)
                )
              }
              disabled={product.stock === 0}
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity((currentQuantity) =>
                  Math.min(product.stock, currentQuantity + 1)
                )
              }
              disabled={
                product.stock === 0 ||
                quantity >= product.stock}
            >
              +
            </button>
          </div>

          <button
            className="product-details-button"
            onClick={() => addToCart(product, quantity)}
            disabled={product.stock === 0}
            >
              {product.stock === 0
                ? "Out of Stock"
                : "Add to Cart"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;