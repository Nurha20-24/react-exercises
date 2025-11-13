import pizzaImg from '../assets/images/pizzaImg.jpg';

const PizzaCard = (props) => {
  const {pizza, addToCart} = props;

  console.log(props);
  return (
    <>
      <div className="card">
        <h2>{pizza.name}</h2>
        <div>Pizza Info</div>
        <div>Hinta {pizza.price}€</div>
        <img src={pizzaImg} alt="" srcSet="" style={{maxWidth: '200px'}} />
        <button onClick={addToCart}>Lisää yksi</button>
      </div>
    </>
  );
};

export default PizzaCard;
