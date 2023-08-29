import styles from "./styles.module.css";

function Business({ business }) {
  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (Math.floor(rating) > i) {
        stars.push(<span className={`fa fa-star ${styles.checked}`}></span>);
      } else {
        stars.push(<span className="fa fa-star"></span>);
      }
    }
    return stars;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={business.image}
          alt={`Photograph of the restaurant ${business.name}`}></img>
        <div className={styles.imgOverlay}>
          <div className={styles.imgText}>{business.name}</div>
        </div>
      </div>
      <div className={styles.cardText}>
        <h4>
          <b>{business.name}</b>
        </h4>
        <p>
          {business.category} | {business.reviewcount} Reviews |{" "}
          {getStars(business.rating)} ({business.rating})
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
