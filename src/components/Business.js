function Business({ business }) {
  const {
    name,
    image,
    address,
    city,
    state,
    zipcode,
    category,
    rating,
    reviewcount,
  } = business;

  return (
    <div>
      <img
        src={image}
        alt="Photograph of the restaurant"
        width="400"
        height="300"></img>
      <h3>{name}</h3>
      <div>
        {category} | {rating} Stars | {reviewcount} Reviews
      </div>
      <div>
        <p>{address}</p>
        <p>{city}</p>
        <p>
          {state} {zipcode}
        </p>
      </div>
    </div>
  );
}

export default Business;
