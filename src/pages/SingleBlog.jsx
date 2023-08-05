import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { images } from "../constants";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Habar"} />
      <BreadCrumb title="Habar" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Kategoriýa</h3>
              <ul className="ps-0 ">
                <li>sagat</li>
                <li>teleiwizor</li>
                <li>kamera</li>
                <li>noutbuk</li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="single-blog-card">
              <h3 className="title">Ajaýyp duşenbe güni </h3>
              <img src={images.blog1} alt="" className="w-100 img-fluid" />
              <p>Bärde habar bolmaly</p>
              <Link to="/blogs" className="dark">
                <HiOutlineArrowLeft /> Habarlara gaýt
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
