import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { images } from "../constants";
const Card = () => {
  return (
    <>
      <Meta title={"cart"} />
      <BreadCrumb title="cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">haryt</h4>
              <h4 className="cart-col-2">baha</h4>
              <h4 className="cart-col-3">sany</h4>
              <h4 className="cart-col-4">jemi</h4>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={images.watch} className="img-fluid" alt="" />
                </div>
                <div className="w-75">
                  <p>Apple watch 8</p>
                  <p>1</p>
                  <p>4.000m.</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">4.000m.</h5>
              </div>
              <div className="cart-col-3 gap-15 d-flex align-items-center">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control number"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-dange " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">4.000m.</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link className="button" to="/store">
                Söwdany dowam et
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>jemi: 4.000m.</h4>
                <p>
                  Tutmlar we eltip bermek hyzmatynyň tölegi zakaz et bölüminde
                </p>
                <Link className="button" to="/checkout">
                  Zakaz et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Card;
