function Card(props) {
  return (
    <div className="hover:cursor-pointer hover:scale-105">
      <img src={props.imageSrc} alt={props.imageAlt} />
    </div>
  );
}

export default Card;
