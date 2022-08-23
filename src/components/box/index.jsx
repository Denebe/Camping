import React, {useContext} from 'react'
import { MyStore } from '../datastore';
import { SideContainer, SideBox } from './styled';


const Box = () => {

    const context = useContext(MyStore);
    return (
            <div>
                {context.db.map((i) => (
                    <div key={Math.random()}>{i.mapX}</div>
                ))}
            </div>
    )
}

export default Box
