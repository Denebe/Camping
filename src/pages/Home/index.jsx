import React, { useEffect } from "react";
import { mainApi } from "../../api/api";
const Home = () => {

  useEffect(() => {
    mainApi(1, 1);
  }, []);

  return (
    <>
    </>
  );
};

export default Home;
