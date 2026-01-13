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
        if (!arr.map((c) => c.country).includes(city.country))
            arr.push({ country: city.country, emoji: city.emoji });
        return arr;
    }, []);
    return (
        <ul className={styles.countryList}>
            {countries.map((country) => {
                return <CountryItem country={country} key={country.country} />
            })}
        </ul>
    )
}

export default CountryList
