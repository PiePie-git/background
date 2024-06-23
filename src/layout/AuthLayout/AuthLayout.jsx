/* eslint-disable */
import React from "react";
import "./AuthLayout.scss";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div className="auth-layout">
      <main className="auth-layout__content">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
