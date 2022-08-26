function Card(props) {
  return (
    <div className="mt-6 text-center w-4/12">
      <p className="text-5xl border-b-4 mb-3 pb-4 ">{props.percent}</p>
      <p className="">{props.title}</p>
    </div>
  );
}

export default Card;
