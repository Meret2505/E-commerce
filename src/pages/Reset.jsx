import React from "react";
import { Link } from "react-router-dom";
import { WarningSharp } from "@material-ui/icons";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Reset = () => {
  return (
    <>
      <Meta title={"Açar sözi täzele"} />
      <BreadCrumb title="Açar sözi täzele" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Açar sözi täzele</h3>
              <p className="text-center mt-2 mb-3">
                Biz seň email poçtaňa hat ibereris{" "}
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Açar sözi"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="confirm-password"
                  placeholder="Açar sözi täzeden"
                  className="form-control"
                />
                <WarningSharp className="" />
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center gap-15 ">
                    <button className="button">Ok</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reset;
