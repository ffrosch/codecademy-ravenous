import { useEffect, useState } from "react";
import { Business } from ".";
import fakeData from "../../fakeData";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    setBusinesses(fakeData);
  }, []);

  return (
    <div className="BusinessList">
      {businesses.map((business, id) => {
        return (
          <Business
            key={id}
            business={business}
          />
        );
      })}
    </div>
  );
}

export default BusinessList;
