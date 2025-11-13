import PizzaCard from './PizzaCard';

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    price: 12,
  },
  {
    id: 2,
    name: 'Vege',
    price: 12,
  },
  {
    id: 3,
    name: 'Hawaii',
    price: 14,
  },
];

const PizzaMenu = () => {
  return (
    <>
      <h3>PizzaMenu</h3>
      <div>Alla on herkullista pizza lista</div>
      <div className="container">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default PizzaMenu;
