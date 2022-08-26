import { useState } from "react";

function Trial() {
  const [open, setOpen] = useState(false);
  //   const Apple = [
  //     {
  //       text: "apa sih kamu",
  //     },
  //     {
  //       text: "apa sih kamu bisa ",
  //     },
  //     {
  //       text: "apa sih",
  //     },
  //   ];

  return (
    <div className="flex justify-center">
      <button
        className="bg-indigo-700 px-6 py-3 rounded-full hover:bg-indigo-400 "
        onClick={() => setOpen(!open)}
      >
        Hallo
      </button>
      {open && (
        <div className="relative">
          <p className="absolute top-10 bg-slate-400 w-64 hover:bg-indigo-400">
            text
          </p>
        </div>
      )}
    </div>
  );
}

export default Trial;
