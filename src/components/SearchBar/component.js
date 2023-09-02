import { useState } from "react";

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
    <form
      id="searchBar"
      onSubmit={onSubmit}>
      <div id="sortBy">
        <ul>
          <li onClick={() => setSortBy("best_match")}>Best Match</li>
          <li onClick={() => setSortBy("rating")}>Highest Rating</li>
          <li onClick={() => setSortBy("review_count")}>Review Count</li>
        </ul>
      </div>
      <div id="searchBusiness">
        <label htmlFor="business">Search by name</label>
        <input
          type="text"
          name="business"
          id="business"
          value={business}
          onChange={({ target }) => {
            setBusiness(target.value);
          }}
        />
      </div>
      <div id="searchLocation">
        <label htmlFor="location">Search by location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={({ target }) => {
            setLocation(target.value);
          }}
        />
      </div>
      <input
        type="submit"
        value="Let's Go"
        id="startSearch"></input>
    </form>
  );
}

export default SearchBar;
