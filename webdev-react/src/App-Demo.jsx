import Greeting from './components/Greeting';
import './App.css';
import PizzaMenu from './components/PizzaMenu';

// javascript funktio joka palauttaa JSX
const App = () => {
  const sitename = 'WSK';
  const styles = {
    backgroundColor: 'gray',
    color: 'white',
  };

  return (
    <>
      <h1 style={styles}>{sitename} Sivusto</h1>
      <div style={{color: 'red'}}>App</div>
      <Greeting name="Ulla" age={34} isTeacher={true} />
      <Greeting name="Matti" age={22} isTeacher={false} />
      <PizzaMenu />
    </>
  );
};
export default App;
