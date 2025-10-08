import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CityItem from './CityItem'
import { useCities } from './../contexts/CitiesContext'
import { useAuth } from '../contexts/FakeAuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CityList() {
    const navigate = useNavigate();
    const { cities, isLoading } = useCities();
    const { isAuthenticated } = useAuth();
    useEffect(function () {
        if (!isAuthenticated) {
            navigate('/login', { replace: true })
        }
    }, [isAuthenticated, navigate])
    if (isLoading) return <Spinner />
    if (cities.length == 0) return <Message message="Add your first city by clicking a city on the map" />
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => {
                return <CityItem city={city} key={city.id} />
            })}
        </ul>
    )
}

export default CityList
