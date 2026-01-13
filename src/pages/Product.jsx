import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            WorldWise is your personal travel companion that helps you track and
            remember every adventure. Whether you're exploring bustling cities
            or remote villages, our interactive map makes it easy to log your
            journeys and cherish your memories.
          </p>
          <p>
            Simply click anywhere on the map to add a city, record the date of
            your visit, and add personal notes about your experience. Share your
            travel story with friends and never forget the places that shaped
            your journey.
          </p>
        </div>
      </section>
    </main>
  );
}
