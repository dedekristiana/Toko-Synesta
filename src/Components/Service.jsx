function Service(props) {
  return (
    <div className="w-7/12 items-center flex gap-2 mb-6 rounded-md p-2 shadow-md shadow-blue-700/70 transition duration-300 hover:scale-110 ">
      <img src={props.img} alt="" className="w-12 h-12" />
      <div>
        <h3 className="text-md text-slate-800 mb-2 ">{props.title}</h3>
        <p className="text-xs text-slate-600 ">{props.desc}</p>
      </div>
    </div>
  );
}

export default Service;
