import classes from "./ProductsPopup.module.css";

const ProductsPopup = ({ category, products, onClose }) => {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className={classes.popupBackground} onClick={onClose}>
      <div
        className={classes.popupContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Products in {category}</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} className={classes.productItem}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}€</p>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className={classes.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductsPopup;
