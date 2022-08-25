import React, { createContext, useState, useEffect } from "react";
import { mainApi } from "../../api/api";
import KakaoMap from "../kakaomap";
import Box from "../box";
import { SideContainer, SideBox } from "../box/styled";

export const MyStore = createContext();

const Store = () => {
  const [page, setPage] = useState(1);
  const [db, setDb] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    mainApi(3, Number(page), setDb, setTotal);
  }, [page]);

  const addClick = () => {
    console.log("click");
    if (page < total + 1) {
      setPage(page + 1);
    }
  };
  const delClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <MyStore.Provider value={{ db }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "1200px",
          }}
        >
          <SideContainer id="left">
            <SideBox id="left">
              <KakaoMap />
            </SideBox>
          </SideContainer>
          <SideContainer id="right">
            <SideBox id="right">
              <button onClick={delClick}>&lt;</button>
              <button onClick={addClick}>&gt;</button>
              <Box />
            </SideBox>
          </SideContainer>
        </div>
      </div>
    </MyStore.Provider>
  );
};

export default Store;
