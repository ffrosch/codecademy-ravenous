import { useState } from "react";
import globalStyles from "../../styles.module.css";
import styles from "./styles.module.css";

function SearchBar({ setBusinesses }) {
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const fetchAPI = async () => {
    // This endpoint returns up to 1000 businesses with some basic information
    // based on the provided search criteria.
    // Note: The API does not return businesses without any reviews.
    // Source: https://docs.developer.yelp.com/reference/v3_business_search
    const searchTerm = `/search?term=${business}&location=${location}&sort_by=${sortBy}&limit=9`;
    const options = { method: "GET", headers: { accept: "application/json" } };
    await fetch("https://api.yelp.com/v3/businesses" + searchTerm, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data.businesses;
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(
      `You searched for business "${business}" and location "${location}"`,
    );
    setBusinesses(fetchAPI() || []);
    setBusiness("");
    setLocation("");
  };

  return (
    <div className={globalStyles.row50}>
      <form
        onSubmit={onSubmit}
        className={styles.form}>
        <div className={globalStyles.row50}>
          <ul className={styles.ul}>
            <li onClick={() => setSortBy("best_match")}>Best Match</li>
            <li onClick={() => setSortBy("rating")}>Highest Rating</li>
            <li onClick={() => setSortBy("review_count")}>Review Count</li>
          </ul>
        </div>

        <div className={globalStyles.row}>
          <input
            type="text"
            className={styles.inputText}
            value={business}
            placeholder="Search Business"
            onChange={({ target }) => {
              setBusiness(target.value);
            }}
          />

          <input
            type="text"
            className={styles.inputText}
            value={location}
            placeholder="Where?"
            onChange={({ target }) => {
              setLocation(target.value);
            }}
          />
        </div>

        <div className={globalStyles.row}>
          <input
            type="submit"
            className={styles.inputSubmit}
            value="Let's Go"></input>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
