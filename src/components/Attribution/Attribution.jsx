import styled from 'styled-components';

const AttrContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 6px;
  color: var(--color-lightCyan);
  font-size: 11px;
  text-align: center;
`;

const AttrLink = styled.a`
  color: var(--color-neonGreen);
`;

const Attribution = () => {
  return (
    <AttrContainer>
      Challenge by{' '}
      <AttrLink
        href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </AttrLink>
      . Coded by{' '}
      <AttrLink
        href="https://github.com/tymino"
        target="_blank"
        rel="noreferrer"
      >
        tymino
      </AttrLink>
      .
    </AttrContainer>
  );
};

export default Attribution;
