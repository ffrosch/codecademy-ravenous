import { useEffect, useState } from "react";
import { Business } from ".";
import fakeData from "../../fakeData";
import styles from "./styles.module.css";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    setBusinesses(fakeData);
  }, []);

  const renderRow = (businesses) => {
    return (
      <div className={styles.row}>
        {businesses.map((business, id) => {
          return (
            <div className={styles.column}>
              <Business
                key={id}
                business={business}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const renderRows = (businesses) => {
    const rows = [];
    for (let i = 0; i < businesses.length; i += 3) {
      rows.push(renderRow(businesses.slice(i, i + 3)));
    }
    return rows;
  };

  return <>{renderRows(businesses)}</>;
}

export default BusinessList;
