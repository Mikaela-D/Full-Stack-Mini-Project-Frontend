import { useCart } from "../components/generic/CartContext";
import classes from "../styles/Cart.module.css";

export default function Cart() {
  const { cart } = useCart(); // Get cart from context

  return (
    <div className={classes.cart}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}€</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
