import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
const Login = () => {
  return (
    <>
      <Meta title={"Giriş"} />
      <BreadCrumb title="Giriş" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Giriş</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Açar söz"
                  className="form-control mt-1"
                />

                <div>
                  <Link to="/forgot-password">Açar sözi unutdym</Link>
                  <div className="d-flex justify-content-center align-items-center gap-15 ">
                    <button className="button">Giriş</button>
                    <Link className="button signup" to="/signup">
                      Döret
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

export default Login;
