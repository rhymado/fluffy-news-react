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
import withNavigate from "../helpers/withNavigate";

class Private extends Component {
  componentDidMount() {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) this.props.navigate("/register");
  }
  render() {
    return <div>Private</div>;
  }
}

export default withNavigate(Private);
