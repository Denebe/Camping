import React, { useContext } from "react";
import { MyStore } from "../datastore";
import { useNavigate } from "react-router-dom";
const Box = () => {
  const context = useContext(MyStore);

  const navigate = useNavigate();

  return (
    <div>
      {context.db.map((i) => (
        <div
          key={Math.random()}
          style={{ width: "100%", display: "flex" }}
          onClick={() =>
            navigate(`/detail`, {
              state: {
                data: i
              },
            })
          }
        >
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={i.firstImageUrl}
            />
          </div>

          <div>
            <div>캠핑장 이름 : {i.facltNm}</div>
            <div>캠핑장 주소 : {i.addr1}</div>
            <div>캠핑장 번호 : {i.tel}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
