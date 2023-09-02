import styles from "./styles.module.css";

function Business({ business }) {
  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (Math.floor(rating) > i) {
        stars.push(
          <span
            key={i}
            className={`fa fa-star ${styles.checked}`}></span>,
        );
      } else {
        stars.push(
          <span
            key={i}
            className="fa fa-star"></span>,
        );
      }
    }
    return stars;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={business.image_url}
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
          {business.categories[0].title} | {business.review_count} Reviews |{" "}
          {getStars(business.rating)} ({business.rating})
        </p>
        <div>
          <p>
            {[
              business.location.address1,
              business.location.address2,
              business.location.address3,
            ].join(" ")}
          </p>
          <p>{business.location.city}</p>
          <p>
            {business.location.state} {business.location.zip_code}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
