import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Chính sách bảo mật"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>thêm chính sách</p>
          <p>thêm chính sách</p>
          <p>thêm chính sách</p>
          <p>thêm chính sách</p>
          <p>thêm chính sách</p>
          <p>thêm chính sách</p>
          <p>thêm chính sách</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
