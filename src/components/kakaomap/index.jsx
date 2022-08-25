import React, { useState, useEffect, useContext } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { MyStore } from "../datastore";

const KakaoMap = (db) => {
  const context = useContext(MyStore);

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

  return (
    <>

      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 35.2714369,
          lng: 126.9609528
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={context !== undefined ? 13 : 13} // 지도의 확대 레벨
      >
        {context !== undefined
          ? context.db.map((value) => (
              <EventMarkerContainer
                key={`EventMarkerContainer-${value.mapY}-${value.mapX}`}
                position={JSON.parse(
                  `{"lat": ${value.mapY}, "lng": ${value.mapX}}`
                )}
                content={value.facltNm}
              />
            ))
          : db.db.map((value) => (
              <EventMarkerContainer
                key={`EventMarkerContainer-${value.mapX}-${value.mapY}`}
                position={JSON.parse(
                  `{"lat": ${value.mapX}, "lng": ${value.mapY}}`
                )}
                content={value.facltNm}
              />
            ))}
      </Map>
    </>
  );
};

export default KakaoMap;

//오늘 초안 완료
//토요일 세부디자인 완료
//일요일 시험끝난후
