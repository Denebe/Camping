import axios from 'axios';

const PROXY_URL = '';

export const mainApi = (rows, page) => {
    const url = `${PROXY_URL}/basedList?numOfRows=${rows}&pageNo=${page}&MobileOS=ETC&MobileApp=TEST&serviceKey=${process.env.REACT_APP_API_KEY}&_type=Json`;
  
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
        console.log(r.data);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };