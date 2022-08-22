import axios from 'axios';

const PROXY_URL = '';

export const mainApi = () => {
    const url = `${PROXY_URL}/basedList`;
  
    const data = {
        numOfRows: '1',
        pageNo: '1',
        MobileOs: 'ETC',
        MobileApp: 'Camp',
        serviceKey: process.env.REACT_APP_API_KEY,
        _type: '',
    };
  
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        console.log(r.data);
        console.log(data)
      },
      (error) => {
        console.log(error.response.data);
        console.log(data);
      }
    );
  };