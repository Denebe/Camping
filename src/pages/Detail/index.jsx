import React , {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom" 
import { imgApi } from '../../api/api';

const Detail = () => {

    const [db ,setDb] = useState([])
  const location = useLocation();
  const { data } = location.state;

  useEffect(() => {
    imgApi(data.contentId, setDb)
  }, [])
    return (
        <div>
            <div>캠핑장명{data.facltNm}</div>
            <div>한줄소개{data.lineIntro}</div>
            <div>소개{data.intro}</div>
            <div>업종{data.induty}</div>
            <div>주소{data.addr1}</div>
            <div>상세주소{data.addr2}</div>
            <div>오시는길{data.direction}</div>
            <div>전화{data.tel}</div>
            <div>홈페이지{data.homepage}</div>
            <div>예약페이지{data.resveUrl}</div>
            <div>화장실 개수{data.toiletCo}</div>
            <div>샤워실 개수{data.swrmCo}</div>
            <div>개수대 개수{data.wtrplCo}</div>
            <div>대표이미지<img src={data.firstImageUrl}/></div>
            <div>
                {db && db.map((i) => (
                    <div key={Math.random()}>
                    <img  loading="lazy" style={{width: '100px', height:'100px'}} src={i.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail
