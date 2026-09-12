import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import Products from "./pages/Products";
import CartComp from "./pages/CartComp";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {

  const[cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((product) => product.id !== productId)
    );
  }

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

        return [...currentCart, { ...product, quantity: 1 }];
      });
  }

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  const decreaseQuantity = (productId) => {
    setCart((currentCart) => {
      const product = currentCart.find(
        (item) => item.id === productId
      );

      if (product.quantity === 1) {
        return currentCart.filter(
          (item) => item.id !== productId
        );
      }

      return currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  }


  return (
    <>
      <NavbarComp cart={cart} />

    <Routes>
      <Route path="/" 
      element={<Home addToCart={addToCart} />} />
      <Route
        path="/products"
        element={<Products addToCart={addToCart} />}
      />
      <Route
        path="/cart"
        element={
          <CartComp
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>


      <FooterComp />
    </>
  );
}

export default App;