import { StarRateSharp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";

const SpecialProduct = () => {
  return (
    <div className="col-6">
      <div className="special-product-card mb-3">
        <div className="d-flex justify-content-between">
          <div className="">
            <img src={images.watch} alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Harytlar</h5>
            <h6 className="title">samsung galaxy s23</h6>
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <StarRateSharp className="star" />
            <p className="price">
              <span className="red-p">13.000 m.</span>&nbsp;
              <strike>13.500m.</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>3</b> günde
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">3</span>:
                <span className="badge rounded-circle p-2 bg-danger">0</span>:
                <span className="badge rounded-circle p-2 bg-danger">0</span>
              </div>
            </div>
            <div className="prod-count mt-3">
              <p>harytlar: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: 25 }}
                  aria-valuemax="100"
                  aria-valuenow="25"
                  aria-valuemin="0"
                ></div>
              </div>
            </div>
            <Link className="button mt-3">Sebede goş</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
