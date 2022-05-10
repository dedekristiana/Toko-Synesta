const Navbar = () => {
  return (
    <div className="flex justify-start py-5 items-center ">
      <div className="w-4/12 flex items-center">
        <span className=" text-white w-10 h-10 bg-gradient-to-r from-slate-300 to-slate-500 rounded flex items-center justify-center mr-4 shadow-2xl">
          S
        </span>
        SYNESTA
      </div>
      <div className="w-8/12">
        <ul className="flex gap-10">
          <li>Sewa Playstatoins</li>
          <li>G-Maps</li>
          <li>Jam buka</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
