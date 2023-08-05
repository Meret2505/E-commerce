import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
const Blog = () => {
  return (
    <>
      <Meta title={"Habarlar"} />
      <BreadCrumb title="Habarlar" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Kategoriýalar</h3>
              <ul className="ps-0 ">
                <li>Sagat</li>
                <li>Telewizor</li>
                <li>Kamera</li>
                <li>Noutbuk</li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
