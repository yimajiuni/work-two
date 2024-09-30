const DishButton = (props) => {
  return (
    <div className="flex">
      <button className="egg px-6 py-1 border-2 border-brightColor hover:bg-brightColor font-body text-brightColor hover:text-white transition-all ">
        <span className="egg-span inline-block">{props.title}</span>
      </button>
      <div className="co-egg"></div>
    </div>
  );
};

export default DishButton;
