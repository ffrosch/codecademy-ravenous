import { useEffect, useState } from "react";
import { BusinessList } from "../components/Business";
import { SearchBar } from "../components/SearchBar";
import fakeData from "../fakeData";

function SearchBusinessesPage() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    setBusinesses(fakeData);
  }, []);

  return (
    <>
      <h3>This is the "SearchBusinessesPage"</h3>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default SearchBusinessesPage;
