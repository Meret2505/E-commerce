import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { images } from "../constants";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Halanlarym"} />
      <BreadCrumb title="Halanlarym" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={images.cross}
                className="position-absolute cross"
                alt=""
              />
              <div className="wishlist-card-img">
                <img src={images.watch} className="img-fluid w-100" alt="" />
              </div>
              <div className=" py-3 px-3">
                <h5 className="title">Apple watch</h5>
                <h6 className="price">3.000m.</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={images.cross}
                className="position-absolute cross"
                alt=""
              />
              <div className="wishlist-card-img">
                <img src={images.watch} className="img-fluid w-100" alt="" />
              </div>
              <div className=" py-3 px-3">
                <h5 className="title">Apple watch</h5>
                <h6 className="price">3.000m.</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
