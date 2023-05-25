const Card = (props) => {
  return <div className={`bg-white p-5 round-xl ${props.className}`}>{props.children}</div>;
};

export default Card;
