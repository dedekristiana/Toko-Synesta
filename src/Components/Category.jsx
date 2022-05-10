const Category = () => {
  const type = [{ text: "PS 3" }, { text: "PS 4" }, { text: "PS + TV" }];

  return (
    <div className="flex  flex-col items-center   ">
      <h1 className="mb-5">Category</h1>

      <ul className="flex gap-10 mb-10">
        {type.map(({ text }) => {
          return <li className=" hover:underline cursor-pointer">{text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Category;
