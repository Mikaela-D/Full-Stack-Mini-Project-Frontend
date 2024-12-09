import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      meetingId: enteredTitle,
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      category: enteredCategory,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Product Name (must be unique: it's the product ID)
          </label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <select id="category" required ref={categoryInputRef}>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Product Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
