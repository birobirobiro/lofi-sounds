function Card(props) {
  return (
    <div className="hover:cursor-pointer hover:scale-105 relative">
      <img src={props.imageSrc} alt={props.imageAlt} />

      {/* <input type="range" max="100" min="0" className=" absolute bottom-3 w-full" /> */}
    </div>
  );
}

export default Card;
