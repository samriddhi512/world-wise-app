import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import Button from "./Button";
import Message from "./Message";
import Spinner from "./Spinner";


import { useUrlPosition } from '../hooks/useUrlPosition';
import { useCities } from "../contexts/CitiesContext";


export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://us1.api-bdc.net/data/reverse-geocode-client";

function Form() {
  const { createCity } = useCities();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  // const [emoji, setEmoji] = useState("");
  const [lat, lng] = useUrlPosition();

  useEffect(function () {
    async function fetchCityData() {
      if (!lat && !lng) return;
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError('');
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if (!data.countryCode) {
          throw new Error("this does not seem to be country please click elsewhere")
        }
        setCityName(data.city);
        setCountryName(data.countryName);
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng])


  function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      countryName,
      emoji: '🏳️‍🌈',
      date,
      notes,
      position: {
        lat, lng
      }
    };

    createCity(newCity);
  }

  if (geocodingError) return <Message message={geocodingError} />
  if (isLoadingGeocoding) return <Spinner />
  if (!lat && !lng) return <Message message="Start by clicking somewhere on the map" />
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker id="date" onChange={date => setDate(date)} value={date} dateFormat={"dd/MM/yyyy"} />

      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary' onClick={(e) => handleSubmit(e)}>Add</Button>
        <Button type='back' onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}
        >&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;
