const Button = (props) => {
  return (
    <div className="text-align-center">
      <button className="rounded border-2 border-brightColor bg-brightColor px-6 py-2 font-hedding text-white transition-all hover:border-white hover:bg-white hover:text-brightColor">
        <span className="inline-block">{props.title}</span>
      </button>
      <div className="co-egg xl:hidden md:hidden inline-block"></div>
    </div>
  );
};

export default Button;
