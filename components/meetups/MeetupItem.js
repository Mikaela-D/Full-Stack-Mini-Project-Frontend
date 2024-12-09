import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import { useCart } from "../generic/CartContext";

function MeetupItem(props) {
  const { addToCart } = useCart();
  const router = useRouter();

  // Function to handle adding the product to the cart and navigating to the cart page
  function addToCartHandler() {
    addToCart({
      id: props.id,
      image: props.image,
      title: props.title,
      price: props.price,
      category: props.category,
    });
    router.push("/cart"); // Navigate to cart page after adding the product
  }

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <price>{props.price}€</price>
          <div>
            <category>{props.category}</category>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={addToCartHandler}>Add to Cart</button>{" "}
          {/* Add to Cart button */}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
