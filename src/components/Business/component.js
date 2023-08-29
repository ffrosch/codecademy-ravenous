import styles from "./styles.module.css";

function Business({ business }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={business.image}
        alt="Photograph of the restaurant"></img>
      <div className={styles.cardText}>
        <h4>
          <b>{business.name}</b>
        </h4>
        <p>
          {business.category} | {business.rating} Stars | {business.reviewcount}{" "}
          Reviews
        </p>
        <div>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
