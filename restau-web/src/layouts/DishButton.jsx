const DishButton = ({ title, compact = false }) => {
  return (
    <div className="flex shrink-0">
      <button
        className={`rounded border-2 border-brightColor bg-brightColor font-hedding text-white transition-all hover:border-white hover:bg-white hover:text-brightColor ${
          compact ? "px-4 py-1.5 text-sm" : "px-6 py-2"
        }`}
      >
        <span className="inline-block">{title}</span>
      </button>
    </div>
  );
};

export default DishButton;
