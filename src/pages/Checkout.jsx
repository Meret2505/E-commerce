import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { images } from "../constants";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Sebet</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      sebet
                    </Link>
                  </li>
                  &nbsp; /<li className="breadcrumb-item active">maglumat</li>
                  &nbsp;/
                  <li className="breadcrumb-item">Sargyt</li>&nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    töleg
                  </li>
                </ol>
              </nav>
              <h4 className="title">harabarlaşmak</h4>
              <p className="user-details">meret jumayew</p>
              <form
                className="d-flex gap-15 flex-wrap justify-content-between"
                action=""
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="Select country" selected>
                      welaýaty saýla
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Adyň"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Familiýaň"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Salgy"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Jaý belgiň"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="şäher"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      welaýaty saýla
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="kody"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between alingn-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> sebede gaýt
                    </Link>
                    <Link to="/store" className="button">
                      söwdany dowam et
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex mb-2 gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative ">
                    <span className="badge bg-secondary text-white rounded-circle position-absolute t-0 end-0">
                      1
                    </span>
                    <img className="img-fluid" src={images.watch} alt="" />
                  </div>
                  <div>
                    <h5 className="title">Apple watch</h5>
                    <p className="total">1</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">4.000m.</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>jemi</p>
                <p className="total-price">4.000m.</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">jemi</p>
                <p className="mb-0 total-price">4.000m.</p>
              </div>
            </div>

            <div className="  py-4 d-flex justify-content-between align-items-center">
              <h4>jemi</h4>
              <h5>4.000m.</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
