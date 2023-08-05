import React from "react";
import { images } from "../constants";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                100 m. -dan gowrak mugt eltip bermek we mugt girdeji{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                tel:{" "}
                <a className="text-white" href="tel:+99364380429">
                  +99364380429
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white">Sebet</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Gözle"
                  aria-label="Gözle"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 " id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compare-product"
                  >
                    <img src={images.compare} alt="compare" />
                    <p className="mb-0">
                      Harytlary <br /> deňeşdir
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={images.wishlist} alt="wishlist" />
                    <p className="mb-0">Halanlarym</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={images.user} alt="user" />
                    <p className="mb-0">
                      Giriş / <br /> Akkaundym
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={images.cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0"> 500m.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expended="false"
                    >
                      <span className="me-5 d-inline-block">Kategoriýalar</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          href="#"
                          className="dropdown-item text-white "
                          to=""
                        >
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="dropdown-item text-white "
                          to=""
                        >
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="dropdown-item text-white "
                          to=""
                        >
                          3
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Başy
                    </NavLink>
                    <NavLink className="text-white" to="/store">
                      Harytlar
                    </NavLink>
                    <NavLink className="text-white" to="/blogs">
                      Habarlar
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Habarlaşmak
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
