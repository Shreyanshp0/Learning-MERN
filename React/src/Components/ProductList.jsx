import { useCart } from "../Context/CartContext";

const ProductList = () => {
  const { products, addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h4>{product.title}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
