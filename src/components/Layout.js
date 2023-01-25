import React from "react";
import Header from "./header/Header";

const Layout = ({ children, handleChange, handleSubmit, searchNews }) => {
  return (
    <div>
      <>
        <Header
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchNews={searchNews}
        />
        {children}
      </>
    </div>
  );
};

export default Layout;
