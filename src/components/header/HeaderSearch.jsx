import React from "react";
import { BiMap } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
const HeaderSearch = () => {
  return (
    <div className="container d-none d-md-block">
      <div className="header_search smargin d-flex align-items-center justify-content-between">
        <div className="location_btn">
          <BiMap />
          <span>Dhaka, 1212</span>
        </div>
        <div className="search">
          <input type="text" className="search_input" placeholder="Search" />
          <span className="search_icon">
            <CiSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
