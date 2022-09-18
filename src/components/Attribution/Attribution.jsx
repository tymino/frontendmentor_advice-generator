import './Attribution.sass';

const Attribution = () => {
  return (
    <div className="attribution">
      Challenge by{' '}
      <a
        className="attribution__link"
        href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className="attribution__link"
        href="https://github.com/tymino"
        target="_blank"
        rel="noreferrer"
      >
        tymino
      </a>
      .
    </div>
  );
};

export default Attribution;
