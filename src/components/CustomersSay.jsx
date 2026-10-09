const testimonials = [
  {
    id: 1,
    name: 'Sara Lopez',
    rating: 5,
    comment: 'The Greek salad was crisp, fresh and authentically delicious! Will definitely come back.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'John Miller',
    rating: 5,
    comment: 'Awesome bruschetta and the best lemon dessert in Chicago. Truly unmatched flavors!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Emily Chen',
    rating: 5,
    comment: 'Great family atmosphere, friendly staff, and mouth-watering Mediterranean dishes.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 4,
    name: 'Marco Rossi',
    rating: 5,
    comment: 'Order a delivery was super quick and the food arrived fresh and delicious.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <h2 id="testimonials-title" className="testimonials-title">
          What our customers say!
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-rating" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </div>
              <div className="testimonial-user">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <h3 className="testimonial-name">{item.name}</h3>
              </div>
              <p className="testimonial-comment">"{item.comment}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
