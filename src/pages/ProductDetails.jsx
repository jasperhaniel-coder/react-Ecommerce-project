
import { useParams } from "react-router-dom";
import Products from "../data/Products";

const ProductDetails = ({addToCart}) => {
  const { id } = useParams();

  const product = Products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <p>Category: {product.category}</p>

      <p>
        Price: ₦{product.price.toLocaleString()}
      </p>

      <p>{product.description}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </main>
  );
}

export default ProductDetails;