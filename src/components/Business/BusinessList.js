import { Business } from ".";
import globalStyles from "../../styles.module.css";
import styles from "./styles.module.css";

function BusinessList({ businesses }) {
  const renderRow = (businesses) => {
    return businesses.map((business) => {
      return (
        <div
          className={styles.column}
          key={business.id}>
          <Business business={business} />
        </div>
      );
    });
  };

  const renderRows = (businesses) => {
    const rows = [];
    for (let i = 0; i < businesses.length; i += 3) {
      rows.push(
        <div
          className={globalStyles.row}
          key={i}>
          {renderRow(businesses.slice(i, i + 3))}
        </div>,
      );
    }
    return rows;
  };

  return <>{renderRows(businesses)}</>;
}

export default BusinessList;
