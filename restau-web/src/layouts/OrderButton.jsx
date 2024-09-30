const OrderButton = (props) => {
  return (
    <div className="text-align-center">
      <button className="rounded text-3xl px-6 py-1 border-2 border-brightColor bg-brightColor hover:bg-white text-white hover:text-brightColor transition-all ">
        {props.title}
      </button>
    </div>
  );
};

export default OrderButton;
