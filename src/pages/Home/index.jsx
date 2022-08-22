import React, { useState, useEffect } from "react";
import { mainApi } from "../../api/api";
import KakaoMap from "../../components/kakaomap";
const Home = () => {

  const [db, setDb] = useState([])
  useEffect(() => {
    mainApi(1, 1, setDb);
  }, []);


  return (
    <>
    {
      db.map((i) => (
        <h1 key={Math.random()}>
          {i.addr1}
        </h1>
      ))
    }
    <KakaoMap db={db} />
    </>
  );
};

export default Home;
