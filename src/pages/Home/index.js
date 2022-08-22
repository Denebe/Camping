import React, {useEffect} from 'react'
import { mainApi } from '../../api/api'

const Home = () => {
    useEffect(() => {
        mainApi(1, 1)
    }, [])
    return (
        <div>
            home
        </div>
    )
}

export default Home
