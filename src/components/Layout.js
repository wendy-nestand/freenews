import React from "react";
import Header from "./header/Header";

const Layout = ({ children, handleChange, handleSubmit, searchNews }) => {
  return (
    <div>
      <>{children}</>
    </div>
  );
};

export default Layout;
