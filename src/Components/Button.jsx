function Button(props) {
  return (
    <button className="text-xs text-white py-2 px-4 ring-1 rounded-full bg-blue-600/90">
      {props.button}
    </button>
  );
}

export default Button;
