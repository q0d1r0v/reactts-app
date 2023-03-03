import {createBrowserRouter} from 'react-router-dom'

// layouts
import DefaultLayout from '../layouts/DefaultLayout'

// pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/about',
                element: <AboutPage/>,
            }
        ]
    }
])

export default router