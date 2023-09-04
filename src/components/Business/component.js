import styles from "./styles.module.css";

function Business({ business }) {
  const getStreet = (location) => {
    const street = [
      location.address1,
      location.address2,
      location.address3,
    ].join(" ");
    return street;
  };

  const getStars = (rating) => {
    const emptyStar = "fa fa-star";
    const filledStar = `fa fa-star ${styles.filled}`;

    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={Math.floor(rating) > i ? filledStar : emptyStar}></span>,
      );
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
          <span className={styles.imgText}>{business.name}</span>
        </div>
      </div>
      <div className={styles.cardText}>
        <h3>
          <b>{business.name}</b>
        </h3>

        <address className={styles.address}>
          {getStreet(business.location)}
          <br />
          {business.location.city}
          <br />
          {business.location.state} {business.location.zip_code}
          <br />
        </address>

        <div className={styles.rating}>
          <span className={styles.restaurantType}>
            {business.categories[0].title}
          </span>
          <br />
          <span>
            {getStars(business.rating)} ({business.rating})
          </span>
          <br />
          <span>{business.review_count} Reviews</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Business;
