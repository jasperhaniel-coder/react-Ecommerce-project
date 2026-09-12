import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/Products";
import "../styles/Product.css";

function Products({addToCart}) {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //   (SelectedCategory === "All" || product.category === SelectedCategory)
  // );



  return (
    <main className="products-container">
      <div className="products-heading">
        <h1>Our Products</h1>
        <p>
          Discover quality products at affordable prices.
        </p>
        <div className="products-filters">
          <input
            className="products-search"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            className="category-filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="All">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}

export default Products;