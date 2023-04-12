import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Kết quả"}>
      <div className="container">
        <div className="text-center">
          <h1>Kết quả</h1>
          <h6>
            {values?.results.length < 1
              ? "Không có"
              : `Tìm thấy ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <button class="btn btn-primary ms-1">Chi tiết</button>
                  <button class="btn btn-secondary ms-1">Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
