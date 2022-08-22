import React, {useEffect} from 'react'
import { mainApi } from '../../api/api'

const Home = () => {
    useEffect(() => {
        mainApi()
    }, [])
    return (
        <div>
            home
        </div>
    )
}

export default Home
