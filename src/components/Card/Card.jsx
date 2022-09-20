import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Line } from '../';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;
  border: 1px solid green;
`;

const CardTitle = styled.h1``;

const CardBody = styled.p``;

const CardButtonWrapper = styled.div`
  transform: translateY(50%);
`;

// svg width:
// d - 444
// m - 295

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
    <CardContainer>
      <CardTitle>{`advice #${id}`}</CardTitle>
      <CardBody>{advice}</CardBody>
      <Line minWidth={480} />
      <CardButtonWrapper>
        <Button handle={updateAdvice} />
      </CardButtonWrapper>
    </CardContainer>
  );
};

export default Card;
