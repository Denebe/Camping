import axios from 'axios';

export const mainApi = async(rows, page, setDb) => {
    const url = `http://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=${rows}&pageNo=${page}&MobileOS=ETC&MobileApp=TEST&serviceKey=${process.env.REACT_APP_API_KEY}&_type=json`;
  
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
        console.log(r.data.response.body.items.item)
        setDb(r.data.response.body.items.item);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };