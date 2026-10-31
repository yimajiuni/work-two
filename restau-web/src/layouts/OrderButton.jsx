const OrderButton = (props) => {
  return (
    <div className="text-align-center">
      <button className="rounded border-2 border-brightColor bg-brightColor px-6 py-2 font-hedding text-lg text-white transition-all hover:border-white hover:bg-white hover:text-brightColor md:text-2xl">
        {props.title}
      </button>
    </div>
  );
};

export default OrderButton;
