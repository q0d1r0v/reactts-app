// imports
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const AboutPage = () => {
    // router
    const router = useNavigate()

    // store data
    const counter = useSelector((state) => state.counter.value)

    // methods
    function goToHomePage() {
        router('/')
    }
    return (
        <div onClick={() => goToHomePage()}>
            About page {JSON.stringify(counter)}
        </div>
    )
}

export default AboutPage