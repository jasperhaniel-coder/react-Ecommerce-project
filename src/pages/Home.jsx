import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import Products from "../data/Products";

const categories = [
  {
    name: "Fashion",
    description: "Shoes and accessories"
  },
  {
    name: "Electronics",
    description: "Headphones and gadgets"
  },
  {
    name: "Smartphones",
    description: "Latest mobile devices"
  }
];

const Home = ({addToCart}) => {
  const featuredProducts = Products.slice(0, 3);  
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO OUR STORE</p>

          <h1>
            Quality Products.
            <br />
            Better Prices.
          </h1>

          <p className="hero-description">
            Discover products you'll love, all in one place.
          </p>

          <Link to="/products" className="hero-button">
            Shop Now
          </Link>
        </div>
      </section>

    <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="products-grid">
        {featuredProducts.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            />
        ))}

        <Link to="/products" className="view-all-button">
            View All Products
        </Link>
        </div>
    </section>

    <section className="categories">
        <h2>Shop by Category</h2>

        <div className="categories-grid">
            {categories.map((category) => (
            <div className="category-card" 
                key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>

                <Link to="/products">Shop Now →</Link>
            </div>
            ))}
        </div>
    </section>
            
    </main>
  );
}

export default Home;