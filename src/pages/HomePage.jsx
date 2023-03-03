// imports
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counter'


const HomePage = () => {
    // router
    const router = useNavigate()

    // store data
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    // methods
    function goToAboutPage() {
        router('/about')
    }

    // page
    return (
        <div>
            <div onClick={() => goToAboutPage()}>
                Home page {JSON.stringify(counter)}
            </div>

            <div onClick={() => dispatch(increment())}>
                +
            </div>

            <div onClick={() => dispatch(decrement())}>
                -
            </div>
        </div>
    )
}

export default HomePage