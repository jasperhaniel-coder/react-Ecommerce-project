import ProductCard from "../components/ProductCard";
import products from "../data/Products";
import "../styles/Product.css";

function Products({addToCart}) {
  return (
    <main className="products-container">
      <div className="products-heading">
        <h1>Our Products</h1>
        <p>
          Discover quality products at affordable prices.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;