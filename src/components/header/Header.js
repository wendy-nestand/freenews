import React from "react";
import SearchBox from "../searchBox/SearchBox";

const Header = ({ searchNews, handleChange, handleSubmit }) => {
  return (
    <SearchBox
      searchNews={searchNews}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    ></SearchBox>
  );
};

export default Header;
