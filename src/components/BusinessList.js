import { useEffect, useState } from "react";
import fakeData from "../fakeData";
import Business from "./Business";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    setBusinesses(fakeData);
  }, []);

  return (
    <div className="BusinessList">
      {businesses.map((business, id) => {
        return <Business key={id} business={business} />;
      })}
    </div>
  );
}

export default BusinessList;
