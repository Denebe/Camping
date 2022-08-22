import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { mainApi } from "../../api/api";
import Logo from "../../assets/img/camplogo.png";
const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    mainApi(1, 1);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#000",
        justifyContent: "center",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <div onClick={() => navigate('/')}>
        <h1>우당탕탕 동완이와 함께하는</h1>
        <img style={{ height: "100px" }} src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Home;
