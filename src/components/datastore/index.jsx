import React, {createContext, useState, useEffect} from 'react'
import { mainApi } from '../../api/api';
import KakaoMap from '../kakaomap';

export const MyStore = createContext();

const Store = () => {

    const [db, setDb] = useState([])
    useEffect(() => {
      mainApi(10, 1, setDb);
    }, []);
  

    return (
       <MyStore.Provider value={{db}}>
           <KakaoMap />
       </MyStore.Provider>
    )
}

export default Store
