import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Private() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin !== "true") navigate("/register");
  }, [navigate]);
  return <div>Private</div>;
}

export default Private;
