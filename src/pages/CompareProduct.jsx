import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { images } from "../constants";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Harytlary deňeşdir"} />
      <BreadCrumb title="Harytlary deňeşdir" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-card position-relative">
              <img
                src={images.cross}
                className="position-absolute cross"
                alt=""
              />
              <div className="product-card-img">
                <img src={images.watch} alt="" />
              </div>
              <div className="compare-details">
                <h5 className="title">Apple watch 8</h5>
                <h6 className="price mb-3">4.000m.</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brend</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>görnüşi</h5>
                    <p>sagat</p>
                  </div>
                  <div className="product-detail">
                    <h5>barmy:</h5>
                    <p>bar</p>
                  </div>
                  <div className="product-detail">
                    <h5>reňki</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>ölçegi</h5>
                    <div className="d-flex gap-10">
                      <p>s</p>
                      <p>m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-card position-relative">
              <img
                src={images.cross}
                className="position-absolute cross"
                alt=""
              />
              <div className="product-card-img">
                <img src={images.watch} alt="" />
              </div>
              <div className="compare-details">
                <h5 className="title">Apple watch 7series</h5>
                <h6 className="price mb-3">3.000m.</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brend</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>görnüşi</h5>
                    <p>sagat</p>
                  </div>
                  <div className="product-detail">
                    <h5>barmy</h5>
                    <p>bar</p>
                  </div>
                  <div className="product-detail">
                    <h5>reňki</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>ölçegi</h5>
                    <div className="d-flex gap-10">
                      <p>s</p>
                      <p>m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
