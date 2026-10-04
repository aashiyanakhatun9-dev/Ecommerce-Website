 import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import half_star_icon from "../../assets/half_star_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
           <img src={product.image} alt="" height="150px" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            height="500px"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={half_star_icon} alt="" height="20px" />
          <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-old-price">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-new-price">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
         Made from high-quality, soft and comfortable fabric, this stylish outfit is designed for a comfortable fit and a modern look. The durable material makes it suitable for regular wear, while the versatile design makes it perfect for casual outings, work, parties, travel, and special occasions. Easy to style with your favorite footwear and accessories.


        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addTocart(product.id);
          }}
        >
          Add to cart
        </button>
        <div className="productdisplay-right-category">
          <span>
            Category: <span>Women , T-Shirt , Crop Top</span>{" "}
          </span>
        </div>
        <div className="productdisplay-right-category">
          <span>
            Tags: <span>Morden , Lates , Trend Shorts</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
