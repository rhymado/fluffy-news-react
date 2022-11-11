import React from "react";
import Header from "../components/Header";

const withTemplate = (Component) => {
  const EnhancedComponent = (props) => {
    return (
      <>
        <Header />
        <Component {...props} />
      </>
    );
  };
  return EnhancedComponent;
};

export default withTemplate;
