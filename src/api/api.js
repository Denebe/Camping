import axios from 'axios';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : 'http://apis.data.go.kr/B551011/GoCamping';

export const mainApi = (rows, page, setDb, setTotal) => {
    const url = `${PROXY_URL}/basedList?numOfRows=${rows}&pageNo=${page}&MobileOS=ETC&MobileApp=TEST&serviceKey=${process.env.REACT_APP_API_KEY}&_type=json`;
  
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        //console.log(r.data.response.body.items.item)
        setDb(r.data.response.body.items.item);
        setTotal(r.data.response.body.totalCount)
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };

  export const imgApi = (id, setDb) => {
    const url = `${PROXY_URL}/imageList?numOfRows=3&pageNo=1&MobileOS=ETC&MobileApp=TEST&serviceKey=${process.env.REACT_APP_API_KEY}&_type=json&contentId=${id}`;
  
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        //console.log(r.data.response.body.items.item)
        setDb(r.data.response.body.items.item);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };
  export const locationApi = (mapX,mapY, setDb) => {
    const url = `${PROXY_URL}/locationBasedList?numOfRows=3&pageNo=1&MobileOS=ETC&MobileApp=TEST&serviceKey=${process.env.REACT_APP_API_KEY}&_type=json&mapX=${mapX}&mapY=${mapY}&radius=30000`;
    console.log(mapX, mapY)
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        setDb(r.data.response.body.items.item);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };

  export const searchApi = (keyword, setDb) => {
    const url = `${PROXY_URL}/searchList?numOfRows=3&pageNo=1&MobileOS=ETC&MobileApp=TEST&serviceKey=${process.env.REACT_APP_API_KEY}&_type=json&keyword=${keyword}`;
  
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        setDb(r.data.response.body.items.item);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };
  