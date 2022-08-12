import Button from "./Button";

function Hero() {
  return (
    <div className=" mt-8 mb-10 ">
      <h1 className="text-xl font-bold">Find & Hire Expert Freelancers</h1>
      <p className="text-sm mt-4 mb-4">
        Work with the best freelance talent from around <br />
        the world on our secure flexible and <br />
        cost-effective platform.
      </p>
      <div className="flex items-center">
        <Button button="Contact us" className="" />
        <button className="text-xs ml-5  text-blue-600/95 py-2 px-4 ring-1 rounded-full">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Hero;
