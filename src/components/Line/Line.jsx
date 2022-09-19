const Line = ({ minWidth }) => {
  return (
    <picture>
      <source
        media={`(min-width: ${minWidth}px)`}
        srcSet="./icons/pattern-divider-desktop.svg"
      />
      <img src="./icons/pattern-divider-mobile.svg" alt="divider" />
    </picture>
  );
};

export default Line;
