import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-img">
        <img src={images.blog1} alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1-nji dekabr</p>
        <h5 className="title">Ajaýyp duşenbe</h5>
        <p className="desc">Bu sahypada hergünki täzelikler ýerleşdiriler</p>
        <Link className="button" to="/blog/:id">
          Giňişleýin
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
