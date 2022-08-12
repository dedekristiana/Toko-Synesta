function Benefit() {
  return (
    <div className="flex flex-wrap justify-center mx-4">
      <div className="w-6/12 flex flex-col items-center text-center gap-2">
        <img src="/Icon1.png" alt="" className="w-16 h-16" />
        <h3 className="text-md text-slate-800 ">Grow your audience</h3>
        <p className="text-xs text-slate-600 ">
          Find new customers and build
          <br /> your email list with
          <br /> lead generation ..
        </p>
      </div>
      <div className="w-6/12 flex flex-col items-center text-center gap-2">
        <img src="/Icon2.png" alt="" className="w-16 h-16" />
        <h3 className="text-md text-slate-800 ">Boost online sales</h3>
        <p className="text-xs text-slate-600 ">
          Market your ecommerce
          <br /> business and deliver experiences
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-2 mt-5">
        <img src="/Icon3.png" alt="" className="w-16 h-16" />
        <h3 className="text-md text-slate-800 ">Sell your knowledge</h3>
        <p className="text-xs text-slate-600 ">
          Build a following, engage them
          <br /> with your content ..
        </p>
      </div>
    </div>
  );
}

export default Benefit;
