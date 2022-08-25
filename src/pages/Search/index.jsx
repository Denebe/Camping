import React, { useState, useEffect } from "react";
import { locationApi, searchApi } from "../../api/api";
import KakaoMap from "../../components/kakaomap";
import Box from "../../components/box";
import { SideContainer, SideBox } from "../../components/box/styled";

const Search = () => {
  const [state, setState] = useState({
    center: {
      lat: 35.973337,
      lng: 128.938737,
    },
    errMsg: null,
    isLoading: true,
  });

  const [db, setDb] = useState([]);

  const [loc, setLoc] = useState("");

  const onClick = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locationApi(
            position.coords.longitude,
            position.coords.latitude,
            setDb
          );
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  };

  const locChange = (e) => {
    setLoc(e.target.value);
  };

  const locKeypress = (e) => {
    if (e.key === "Enter") {
      searchApi(encodeURI(loc), setDb);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {db ? (
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
                <KakaoMap db={db} />
              </SideBox>
            </SideContainer>
            <SideContainer id="right">
              <SideBox id="right">
                <button onClick={onClick}>
                  내 위치에서 가까운 캠핑장 확인하기
                </button>
                <input
                  placeholder="키워드로 검색됩니다."
                  onChange={locChange}
                  onKeyPress={locKeypress}
                />
                <Box db={db} />
              </SideBox>
            </SideContainer>
          </div>
        ) : (
          <div>검색결과 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Search;
