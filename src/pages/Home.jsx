import React from "react";
import { images } from "../constants";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src={images.mainBanner1}
                alt="mainBanner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>Iň täze gulaklyklar</h4>
                <h5>Galaxy buds</h5>
                <p>3.000 m. ýa-da 200 m. her aý</p>
                <Link className="button">satyn al</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={images.catbanner1}
                  alt="mainBanner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Iň täze noutbuklar</h4>
                  <h5>Macbook pro</h5>
                  <p>
                    56.000m. <br /> ýa-da 2.000m. her aý
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={images.catbanner2}
                  alt="mainBanner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Iň täze sagatlar</h4>
                  <h5>Apple watch 8</h5>
                  <p>
                    4.000m.
                    <br /> ýa-da 1000m. her aý
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={images.catbanner3}
                  alt="mainBanner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Iň täze Planşetler</h4>
                  <h5>iPad s13+ pro</h5>
                  <p>
                    8.000m.
                    <br /> ýa-da 1000m. her aý
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={images.catbanner4}
                  alt="mainBanner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Iň täze gulaklyklar</h4>
                  <h5>Earpods</h5>
                  <p>
                    8.000m.
                    <br /> ýa-da 1000m. her aý
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>aýdym we oýun</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.laptop} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>akylly tv</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.tv} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>akylly gulaklyklar</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.headphone} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>kameralar</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.camera} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>aýdym we oýun</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.laptop} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>akylly tv</h6>
                  <p>10 items</p>
                </div>
                <img src={images.tv} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>akylly gulaklyklar</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.headphone} alt="camera" />
              </div>
              <div className="d-flex  align-items-center">
                <div className="">
                  <h6>kameralar</h6>
                  <p>10 sany</p>
                </div>
                <img src={images.camera} alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Aýratyn harytylar</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img src={images.laptop} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>uly ekran</h5>
                <h6>smart watch series 7</h6>
                <p>4.000m.</p>
              </div>
            </div>
          </div>
          <div className="col-3  ">
            <div className="famous-card position-relative bg-white">
              <img src={images.watch} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>uly ekran</h5>
                <h6>smart watch series 7</h6>
                <p>4.000m.</p>
              </div>
            </div>
          </div>
          <div className="col-3  ">
            <div className="famous-card position-relative bg-white">
              <img src={images.watch} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>uly ekran</h5>
                <h6>smart watch series 7</h6>
                <p>4.000m.</p>
              </div>
            </div>
          </div>
          <div className="col-3  ">
            <div className="famous-card position-relative bg-white">
              <img src={images.watch} alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>uly ekran</h5>
                <h6>smart watch series 7</h6>
                <p>4.000m.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Ýörite harytlar</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Biziň belli harytlarymyz </h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper ">
              <Marquee className="d-flex">
                <div className="mx-4 w-25%">
                  <img src={images.brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25%">
                  <img src={images.brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Biziň soňky harytlarymyz</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
