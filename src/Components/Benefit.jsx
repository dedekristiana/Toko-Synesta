function Benefit(props) {
  return (
    <div className="w-6/12 flex flex-col items-center text-center gap-2 mt-6 mb-6">
      <img src={props.img} alt="" className="w-16 h-16" />
      <h3 className="text-md text-slate-800 ">{props.title}</h3>
      <p className="text-xs text-slate-600 ">{props.desc}</p>
    </div>
  );
}

export default Benefit;
