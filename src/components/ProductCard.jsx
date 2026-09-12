import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-price">
          ₦{product.price.toLocaleString()}
        </p>

        <button className="Cart-button"
           onClick={() => addToCart(product)}
          // onClick={() => setCart((currentCart) => [...currentCart, product])}
        >
          Add to Cart
        </button>

      </div>
    </article>
  );
}

export default ProductCard;