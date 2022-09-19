import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from '../';

import { ReactComponent as SvgDividerMobile } from './icons/pattern-divider-mobile.svg';
import { ReactComponent as SvgDividerDesktop } from './icons/pattern-divider-desktop.svg';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid green;
`;

const CardTitle = styled.h1``;

const CardBody = styled.p``;

const CardLine = styled.div`
  border: 1px solid black;
`;

const CardButtonWrapper = styled.h1``;

const Card = () => {
  const cardContainerRef = useRef(null);
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
    <CardContainer ref={cardContainerRef}>
      <CardTitle>{id}</CardTitle>
      <CardBody>{advice}</CardBody>
      <CardLine>
        <SvgDividerMobile />
      </CardLine>
      <CardButtonWrapper>
        <Button />
      </CardButtonWrapper>
    </CardContainer>
  );
};

export default Card;
