import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>🏳️‍🌈</span>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
