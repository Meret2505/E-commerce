import React from "react";
import { Link } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
const ForgotPassword = () => {
  return (
    <>
      {" "}
      <Meta title={"Açar sözi unutdym"} />
      <BreadCrumb title="Açar sözi unutdym" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Açar sözi täzele</h3>
              <p className="text-center mt-2 mb-3">
                Biz saňa emailiňe hat ugaradars{" "}
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center gap-15 ">
                    <Link to="/reset" className="button signup">
                      Ugrat
                    </Link>
                    <Link className="cancel" to="/login">
                      Gýbolsun et
                    </Link>
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

export default ForgotPassword;
