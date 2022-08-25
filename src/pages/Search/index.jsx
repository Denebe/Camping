import React, { useState, useEffect } from "react";
import { locationApi } from "../../api/api";
import KakaoMap from "../../components/kakaomap";

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
  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locationApi(
            position.coords.latitude,
            position.coords.longitude,
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
  }, []);
  return (
    <div>
        <div style={{width: '500px', height:'500px'}}>
      <KakaoMap db={db} />

        </div>
      {db.map((i) => (
        <div key={Math.random()}>{i.facltNm}</div>
      ))}
    </div>
  );
};

export default Search;
