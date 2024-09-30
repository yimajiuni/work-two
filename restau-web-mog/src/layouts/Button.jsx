const Button = (props) => {
  return (
    <div className="text-align-center">
      <button className="egg-big px-6 py-1 border-2 border-brightColor hover:bg-brightColor font-body text-brightColor hover:text-white transition-all ">
        <span className="egg-span inline-block">{props.title}</span>
      </button>
      <div className="co-egg xl:hidden inline-block"></div>
    </div>
  );
};

export default Button;
