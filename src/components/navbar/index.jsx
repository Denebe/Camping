import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/camplogo.png";
import { Gnb } from "./styles";

const Nav = () => {
  let navigate = useNavigate();

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
      <div style={{width : '100%'}}>
        <div onClick={() => navigate("/")}>
          <h1>우당탕탕 동완이와 함께하는</h1>
          <img style={{ height: "100px" }} src={Logo} alt="Logo" />
        </div>

          <Gnb>
            <div>캠핑장소</div>
            <div>캠핑장비</div>
            <div>캠핑일지</div>
          </Gnb>
      </div>
    </div>
  );
};

export default Nav;
