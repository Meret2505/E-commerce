import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Termin we şert syýasaty"} />
      <BreadCrumb title="Termin we şert syýasaty" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
