function Card(props) {
  return (
    <div className="hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-gray-700 transition-all">
      <img className="w-[300px] h-[260px] rounded-lg object-cover" src={props.imageSrc} alt={props.imageAlt} />

      {/* <input type="range" max="100" min="0" className=" absolute bottom-3 w-full" /> */}
    </div>
  );
}

export default Card;
