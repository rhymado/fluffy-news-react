// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Private() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const isLogin = localStorage.getItem("isLogin");
//     if (isLogin !== "true") navigate("/register");
//   }, [navigate]);
//   return <div>Private</div>;
// }
import React, { Component } from "react";
// import withNavigate from "../helpers/withNavigate";
import { Navigate } from "react-router-dom";

class Private extends Component {
  state = {
    isLogin: localStorage.getItem("isLogin"),
  };
  componentDidMount() {}
  render() {
    // const isLogin = localStorage.getItem("isLogin");
    console.log(this.state.isLogin);
    if (!this.state.isLogin)
      return <Navigate to={"/register"} replace={true} />;
    return <div>Private</div>;
  }
}

// export default withNavigate(Private);
export default Private;
