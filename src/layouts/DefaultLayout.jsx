// imports
import {Outlet} from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <div>
            Default
            <Outlet/>
        </div>
    )
}

export default DefaultLayout