import { StarRateSharp } from "@material-ui/icons";
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { images } from "../constants";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
const Store = () => {
  const [grid, setGrid] = useState(4);
  const num = 4;
  return (
    <>
      <Meta title={"Harytlar"} />
      <BreadCrumb title="Harytlar" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Kategoriýa</h3>
                <ul className="ps-0 ">
                  <li>sagat</li>
                  <li>telewizor</li>
                  <li>kamera</li>
                  <li>noutbuk</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">süzgüç</h3>
                <div>
                  <h5 className="sub-title ">barmy</h5>
                  <div>
                    <div className="form-check d-flex align-items-center gap-10">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        bar {num}
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center gap-10">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        ýok {num}
                      </label>
                    </div>
                    <h5 className="sub-title ">baha</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div class="form-floating ">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="from"
                        />
                        <label htmlFor="floatingInput">-dan</label>
                      </div>
                      <div className="form-floating ">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="to"
                        />
                        <label htmlFor="floatingInput">çenli</label>
                      </div>
                    </div>
                    <h5 className="sub-title ">reňkler</h5>
                    <div>
                      <Color />
                    </div>
                    <h5 className="sub-title ">ölçeg</h5>
                    <div>
                      <div className="form-check d-flex align-items-center gap-10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          S {num}
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center gap-10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-2"
                        />
                        <label className="form-check-label" htmlFor="color-2">
                          m {num}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">tegler</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items -center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                      gulaklyklar
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                      noutbuk
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                      telewizor
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2 ">
                      smartfonlar
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                      planşetler
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                      uly gulaklyklar
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                      sagatlar
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">islendik haryt</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src={images.watch} className="img-fluid" alt="" />
                    </div>
                    <div className="w-50">
                      <h5>çagalar üçin nauşnik 10 okuwçy üçin köp reňkli</h5>
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <div>
                        <b>800m.</b>
                      </div>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src={images.watch} className="img-fluid" alt="" />
                    </div>
                    <div className="w-50">
                      <h5>çagalar üçin nauşnik 10 okuwçy üçin köp reňkli</h5>
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <StarRateSharp className="star" />
                      <div>
                        <b>800m.</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="m-0 d-block " style={{ width: "100px" }}>
                      Süzgüç:{" "}
                    </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">belliler</option>
                      <option value="best-selling" selected="selected">
                        Iň köp satylýanlar
                      </option>
                      <option value="title-ascending">
                        Elipbiýiň başy boýunça
                      </option>
                      <option value="title-descending">
                        Elipbiýiň ahyry boýunça
                      </option>
                      <option value="created-ascending">täzeden könä</option>
                      <option value="created-descending">köneden täzä</option>
                      <option value="price-ascending">gymmatdan arzana</option>
                      <option value="price-descending">arzandan gymmada</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">{21} harytlar</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={images.gr4}
                      className="img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={images.gr3}
                      className="img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={images.gr2}
                      className="img-fluid"
                      alt="grid"
                    />
                    <img
                      src={images.gr}
                      className="img-fluid"
                      alt="grid"
                      onClick={() => {
                        setGrid(12);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
