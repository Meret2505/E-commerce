import React from "react";
import { images } from "../constants";
import { StarRateSharp } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={images.wish} alt="" />
            </button>
          </div>
          <div className="product-img">
            <img src={images.watch} alt="product-img" className="img-fluid" />
            <img src={images.headphone} alt="" className="img-fluid" />
          </div>
          <div className="product-details">
            <h6 className="brand">Apple</h6>
            <h5 className="product-title">Smart watch 7series</h5>
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              harydyň düşündirişi
            </p>
            <p>
              <Link className="price">3.000 m.</Link>
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <button className="border-0 bg-transparent">
                <img src={images.prodcompare} alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={images.view} alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={images.addCart} alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={images.wish} alt="" />
            </button>
          </div>
          <div className="product-img">
            <img src={images.watch} alt="product-img" className="img-fluid" />
            <img src={images.headphone} alt="" className="img-fluid" />
          </div>
          <div className="product-details">
            <h6 className="brand">Apple</h6>
            <h5 className="product-title">Apple watch 8</h5>
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              harydyň düşündirişi
            </p>
            <p>
              <Link className="price">4.000m.</Link>
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <button className="border-0 bg-transparent">
                <img src={images.prodcompare} alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={images.view} alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={images.addCart} alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
