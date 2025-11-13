import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const HandleClickRight = () => {
    setCount(count + 1);
    console.log('Count: ', count);
  };

  const handleTyping = (e) => {
    console.log(name);
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={HandleClickRight}>Click me</button>
      </div>
      <input type="text" placeholder="Nimesi" onChange={handleTyping} />
    </>
  );
};

export default Counter;
