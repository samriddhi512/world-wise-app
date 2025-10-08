import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem'
import { useCities } from './../contexts/CitiesContext'

function CountryList() {
    const { cities, isLoading } = useCities();


    if (isLoading) return <Spinner />
    if (cities.length == 0) return <Message message="Add your first city by clicking a city on the map" />
    const countries = cities.reduce((arr, city) => {
        if (!arr.includes(city.country)) arr.push(city.country);
        return arr;
    }, [])
    console.log(countries)
    return (
        <ul className={styles.countryList}>
            {countries.map((country, index) => {
                return <CountryItem country={country} key={index} />
            })}
        </ul>
    )
}

export default CountryList
