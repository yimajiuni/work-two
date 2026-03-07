const Button = (props) => {
  return (
    <div className="text-align-center">
      <button className="px-6 py-1 border-2 border-brightColor hover:bg-brightColor font-body text-brightColor hover:text-white transition-all ">
        <span className="inline-block">{props.title}</span>
      </button>
      <div className="co-egg xl:hidden md:hidden inline-block"></div>
    </div>
  );
};

export default Button;
