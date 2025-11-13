import PizzaCard from './PizzaCard';
import {useState} from 'react';

const pizzas = [
  {id: 1, name: 'Margherita', price: 12},
  {id: 2, name: 'Vege', price: 12},
  {id: 3, name: 'Hawaii', price: 14},
];

const PizzaMenu = () => {
  const [cart, setCart] = useState(0);

  // Kun lapsikomponentti pyytää lisäämään yhden pizzan ostoskoriin,
  // ajetaan tämä parent elementin funktio
  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  return (
    <>
      <h3>PizzaMenu</h3>
      <div>Alla on herkulliset pizzat</div>
      <div>Ostoskorissa on tällä hetkellä {cart} pizzaa</div>
      <div className="container">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default PizzaMenu;
