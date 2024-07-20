import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>User ID: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
