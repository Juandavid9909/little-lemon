function DeliveryIcon() {
  return (
    <svg
      className="delivery-icon"
      width="18"
      height="15"
      viewBox="0 0 24 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.5 9.5h-2.2l-1.5-3.3A2 2 0 0 0 14 5H10V3H7v2H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h.2a3 3 0 0 0 5.6 0h3.4a3 3 0 0 0 5.6 0h1.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1.5zM6 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-3h-1.5l-1.2-2.5H18V11z" />
    </svg>
  );
}

function SpecialCard({ image, title, price, description, deliveryLink = '#' }) {
  return (
    <article className="special-card" aria-label={title}>
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={title}
          className="card-image"
          loading="lazy"
          decoding="async"
          width="280"
          height="185"
        />
      </div>
      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">{price}</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <a
            href={deliveryLink}
            className="card-delivery-link"
            aria-label={`Order ${title} for delivery`}
          >
            <span>Order a delivery</span>
            <DeliveryIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default SpecialCard;
