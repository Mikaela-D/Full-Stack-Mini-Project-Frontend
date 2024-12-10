import classes from "./HamMenuContent.module.css";
import { useState, useContext } from "react";
import GlobalContext from "../../pages/store/globalContext";
import ProductsPopup from "../generic/ProductsPopup";

export default function HamMenuContent({ onClose }) {
  const globalCtx = useContext(GlobalContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Define categories
  const categories = ["Food", "Clothes", "Furniture"];

  // Handle category click to show popup
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Close the popup
  const handleClosePopup = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      {/* This div is the background that closes the menu when clicked */}
      <div className={classes.background} onClick={onClose}>
        <div className={classes.mainContent}>
          {/* Display categories */}
          {categories.map((category, index) => (
            <div
              key={index}
              className={classes.menuItem}
              onClick={() => handleCategoryClick(category)} // Handle category click
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Show the products in the selected category if one is selected */}
      {selectedCategory && (
        <ProductsPopup
          category={selectedCategory}
          products={globalCtx.theGlobalObject.meetings}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}
