

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

  return (
    <main>
      <h1>Your Cart</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>Price: ₦{product.price.toLocaleString()}</p>

         <div>
            <button onClick={() => decreaseQuantity(product.id)}>
              −
            </button>

            <span>{product.quantity}</span>

            <button onClick={() => increaseQuantity(product.id)}>
              +
            </button>
          </div>

          <p>
            Subtotal: ₦
            {(product.price * product.quantity).toLocaleString()}
          </p>

          <button onClick={() => removeFromCart(product.id)}>
            Remove
          </button>
        </div>
      ))}

      <p>Total: ₦{total.toLocaleString()}</p>
      {/* <button onClick={() => alert("Proceeding to checkout...")}>
        Proceed to Checkout
      </button> */}

    </main>
  )
}

export default CartComp;