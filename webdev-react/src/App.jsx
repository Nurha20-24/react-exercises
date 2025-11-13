import Greeting from './components/Greeting';
import Footer from './components/Footer';
import './App.css';
import PizzaMenu from './components/PizzaMenu';
import Home from './components/Home';

// javascript funktio koka paluattaa JSX
const App = () => {
  const sitename = 'WSK';
  const styles = {
    backgroundColor: 'gray',
    color: 'white',
  };

  return (
    <>
      <h1 style={styles}>{sitename} App</h1>
      <Home />

      <PizzaMenu />
    </>
  );
};
export default App;
