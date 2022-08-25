import React, { useContext } from "react";
import { MyStore } from "../datastore";

const Box = () => {
  const context = useContext(MyStore);
  return (
    <div>
      {context.db.map((i) => (
        <div key={Math.random()} style={{width: '100%', display:'flex'}}>
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
