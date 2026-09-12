import { Link, useParams } from "react-router-dom";
import products from "../data/Products";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

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

          <p className="product-details-description">
            {product.description ||
              "This is a quality product selected to give you great value and a satisfying shopping experience."}
          </p>

          <button
            className="product-details-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;