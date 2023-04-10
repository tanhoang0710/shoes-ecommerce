import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>

          <NavLink
            to={"/dashboard/user/profile"}
            className="list-group-item lít-group-item-action"
          >
            Trang cá nhân
          </NavLink>
          <NavLink
            to={"/dashboard/user/orders"}
            className="list-group-item lít-group-item-action"
          >
            Các đơn đặt hàng
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
