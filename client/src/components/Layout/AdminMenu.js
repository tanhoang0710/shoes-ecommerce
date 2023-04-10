import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Bảng điều khiển quản trị viên</h4>

          <NavLink
            to={"/dashboard/admin/create-category"}
            className="list-group-item lít-group-item-action"
          >
            Tạo danh mục
          </NavLink>
          <NavLink
            to={"/dashboard/admin/create-product"}
            className="list-group-item lít-group-item-action"
          >
            Tạo sản phẩm
          </NavLink>
          <NavLink
            to={"/dashboard/admin/users"}
            className="list-group-item lít-group-item-action"
          >
            Người dùng
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
