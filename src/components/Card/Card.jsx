import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Line } from '../';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 46px 30px;

  background: var(--color-darkGrayishBlue);
  border-radius: 10px;

  @media (max-width: 540px) {
    padding: 30px 20px 46px 20px;
  }
`;

const CardTitle = styled.h1`
  margin-bottom: 20px;
  color: var(--color-neonGreen);
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const CardBody = styled.p`
  max-width: 444px;
  margin-bottom: 26px;
  color: var(--color-lightCyan);
  font-size: 28px;
  font-weight: 800;
  text-align: center;

  @media (max-width: 540px) {
    max-width: 295px;
  }
`;

const CardButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  transform: translateY(50%);

`;

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
