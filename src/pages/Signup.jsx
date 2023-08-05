import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";
const Signup = () => {
  return (
    <>
      <Meta title={"Döret"} />
      <BreadCrumb title="Döret" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Akkaunt döret</h3>

              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Adyňyz"
                  className="form-control"
                />
                <CustomInput
                  type="text"
                  name="surname"
                  placeholder="Familiýaňyz"
                  className="form-control"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Açar sözi"
                  className="form-control mt-1"
                />

                <div>
                  <div className="d-flex justify-content-center align-items-center gap-15 ">
                    <button className="button">Döret</button>
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

export default Signup;
