import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Nav";
import Category from "./Components/Category";

function App() {
  const [open, setOpen] = useState(0);

  if (open === 5) {
    alert("lima");
  } else {
    alert("bukan lima");
  }

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="container mx-auto text-slate-600 pb-20">
        {/* ini navbar */}
        <Navbar />
        {/* Header */}
        <div className="my-10 flex justify-center">
          <h1 className="text-4xl">INI HEADER</h1>
        </div>
        {/* ini category */}
        <Category />
        {/* ini card */}
        <div className="mx-auto relative group hover:bg-slate-400 flex flex-col items-center w-4/12 my-10 border-none rounded-xl p-5 shadow-md">
          <img
            className="absolute w-24 h-24 -top-14"
            src="/logo192.png"
            alt="img"
          />
          <h2 className="pt-5 group-hover:text-white font-bold text-2xl">
            PS 3
          </h2>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-slate-600 p-3 text-white rounded-lg"
            onClick={() => setOpen(open + 1)}
          >
            klik disini
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
