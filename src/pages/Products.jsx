import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Product.css";

function Products({addToCart}) {
  return (
    <main className="products-container">
      <h1>Our Products</h1>

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