import { useRef } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background: var(--color-neonGreen);
  border: none;
  border-radius: 50%;

  transition: box-shadow ease-in 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 25px 0px var(--color-neonGreen);
  }
  &:active {
    box-shadow: 0px 0px 25px 16px var(--color-neonGreen);;
  }
`;

const Button = ({ handle }) => {
  const { current } = useRef(
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="#202733"
      />
    </svg>
  );
  return (
    <ButtonStyled data-testid='card-button' title="My button" type="button" onClick={handle}>
      {current}
    </ButtonStyled>
  );
};

export default Button;
