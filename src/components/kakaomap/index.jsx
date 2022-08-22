import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
const { kakao } = window;
let marker = [];

const KakaoMap = (db) => {
  console.log(db);
  let navigate = useNavigate();
  const markerClick = (id) => {
    navigate(`/detail`, {
      state: {
        id: id,
      },
    });
  };

  console.log(db.db.length);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  var geocoder = new kakao.maps.services.Geocoder();
  for (let i = 0; i < db.db.length; i++) {
    geocoder.addressSearch(db.db[i].addr1, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var city = [];
        city.push(db.db[i].facltNm);

        const bounds = new kakao.maps.LatLngBounds();

        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          clickable: true,
        });
        bounds.extend(coords);

        map.setBounds(bounds);
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          markerClick(db.db[i].facltNm);
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;" >${city}</div>`,
        });
        infowindow.open(map, marker);
      }
    });
  }
  const [state, setState] = useState({
    center: {
      lat: 35.973337,
      lng: 128.938737,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])

  return (
    <Map // 지도를 표시할 Container
      center={{
        lat: 35.973337,
        lng: 128.938737,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "300px",
      }}
      level={5} // 지도의 확대 레벨
      onCreate={setMap}
    >
      {!state.isLoading && (
    <MapMarker position={state.center}>
      <div style={{ padding: "5px", color: "#000" }}>
        {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
      </div>
    </MapMarker>
  )}
    </Map>
  );
};

export default KakaoMap;

//오늘 초안 완료
//토요일 세부디자인 완료
//일요일 시험끝난후
