function Title(props) {
  return (
    <div className="text-center mt-6">
      <h1 className="text-slate-800 text-2xl mb-4 ">{props.title}</h1>
      <p className="text-slate-700 text-sm">{props.first}</p>
      <p className="text-slate-700 text-sm">{props.second}</p>
    </div>
  );
}

export default Title;
