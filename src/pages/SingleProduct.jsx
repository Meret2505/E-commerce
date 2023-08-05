import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { StarRateSharp } from "@material-ui/icons";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import { images } from "../constants";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
const SingleProduct = () => {
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 300,
    img: `${images.mainBanner1}`,
  };

  const [orederedProduct, setProduct] = useState(true);
  return (
    <>
      <Meta title={"Haryt ady"} />
      <BreadCrumb title="haryt ady" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-img">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-image d-flex flex-wrap gap-15">
              <div>
                <img
                  src={images.mainBanner1}
                  className="img-fluid"
                  alt=""
                  onClick={() => {
                    setProduct(false);
                  }}
                />
              </div>
              <div>
                <img src={images.mainBanner1} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={images.mainBanner1} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={images.mainBanner1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom ">
                <h3 className="title">
                  Çagalar üçin nauşnik köp mukdarda 10 paket talyplar üçin köp
                  reňkli
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">3.000m.</p>
                <div className="d-flex align-items-center gap-10">
                  <div>
                    {" "}
                    <StarRateSharp className="star" />
                    <StarRateSharp className="star" />
                    <StarRateSharp className="star" />
                    <StarRateSharp className="star" />
                  </div>
                  <p className="mb-0 t-review">(2 görülen)</p>
                </div>
                <a href="#review" className="review-btn">
                  teswir ýaz
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">görnüş :</h3>
                  <p className="product-data ">gulaklyk</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">brend :</h3>
                  <p className="product-data">apple</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">kategoriýa :</h3>
                  <p className="product-data">sagat</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">tegler :</h3>
                  <p className="product-data">gulaklyk</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">barmy :</h3>
                  <p className="product-data">bar</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">ölçeg :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      s
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      xL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      xXL
                    </span>
                  </div>{" "}
                </div>
                <div className="mt-2 mb-3">
                  <h3 className="product-heading">reňki :</h3>
                  <Color />
                </div>
                <div className="d-flex gap-10 flex-row mt-2 mb-3 align-items-center">
                  <h3 className="product-heading">sany :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      style={{ width: 50, paddingLeft: 5 }}
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <Link to="/cart" className="button">
                      sebede goş
                    </Link>
                    <Link className="button signup" to="/signup">
                      şuwagt satyn al
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="" className="">
                      <TbGitCompare /> deňeşdir
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart /> halanlaryma goş
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">
                    eltip bermek we gaýtarmak :
                  </h3>
                  <p className="product-data">Gulaklyklar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4 className="">Giňişleýin</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3">
              <p className="">gulaklygyň giňişleýinmaglumaty bolmaly</p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2"></h4>
                  <div className="d-flex gap-10">
                    <div>
                      {" "}
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                    </div>
                    <p className="mb-0">2 teswir boýunça</p>
                  </div>
                </div>
                {orederedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      teswir ýaz{" "}
                    </a>
                  </div>
                )}
              </div>
              <div id="review" className="review-form py-4">
                <h4>teswir ýaz</h4>
                <form className="d-flex flex-column gap-15">
                  <div className="mb-3">
                    {" "}
                    <StarRateSharp className="star" />
                    <StarRateSharp className="star" />
                    <StarRateSharp className="star" />
                    <StarRateSharp className="star" />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">teswir ugrat</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <h4>teswirler</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Meret</h6>{" "}
                    <div>
                      {" "}
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                    </div>
                  </div>
                  <p className="mt-3">gowy haryt eken!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Meşhur hayrtlar</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
