function Business({ business }) {
  return (
    <div className="card">
      <img
        src={business.image}
        alt="Photograph of the restaurant"
        width="400"
        height="300"></img>
      <div className="container">
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
