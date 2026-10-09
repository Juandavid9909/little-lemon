import SpecialCard from './SpecialCard';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

const specialsData = [
  {
    title: 'Greek salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
    deliveryLink: '#',
  },
  {
    title: 'Bruchetta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruchetta,
    deliveryLink: '#',
  },
  {
    title: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
    deliveryLink: '#',
  },
];

function Specials() {
  return (
    <section className="specials-section" aria-labelledby="specials-title">
      <div className="specials-container">
        <div className="specials-header">
          <h2 id="specials-title" className="specials-title">
            This weeks specials!
          </h2>
          <button type="button" className="btn-primary specials-btn">
            Online Menu
          </button>
        </div>

        <div className="specials-grid">
          {specialsData.map((dish) => (
            <SpecialCard
              key={dish.title}
              title={dish.title}
              price={dish.price}
              description={dish.description}
              image={dish.image}
              deliveryLink={dish.deliveryLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
