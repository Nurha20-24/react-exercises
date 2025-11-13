import pizzaImg from '../assets/images/pizzaImg.jpg';

const PizzaCard = ({pizza}) => {
  return (
    <>
      <div className="card">
        <h2>{pizza.name}</h2>
        <div>Pizza Info</div>
        <div>Hinta {pizza.price}€</div>
        <img src={pizzaImg} alt="Pizza" width="200" />
      </div>
    </>
  );
};

export default PizzaCard;
