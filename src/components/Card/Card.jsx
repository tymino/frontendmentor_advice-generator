import './Card.sass';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [{ id, advice }, setAdvice] = useState({});

  const updateAdvice = async () => {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(data.slip);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    updateAdvice();
  }, []);

  return (
    <div className="card">
      <div>{id}</div>
      <div>{advice}</div>
      <button onClick={updateAdvice}>click</button>
    </div>
  );
};

export default Card;
