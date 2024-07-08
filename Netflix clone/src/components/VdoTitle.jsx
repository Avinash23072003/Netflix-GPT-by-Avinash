const VdoTitle = ({ title, overview }) => {
  return (
    <div className="pt-44 pl-12 absolute bg-gradient-to-r from-black aspect-video">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="pt-4 w-1/4 text-white">{overview}</p>
      <div className="pt-6 space-x-6">
        <button className="bg-white text-black text-xl w-40 h-12 rounded-md hover:bg-opacity-60">
          ▶️ Play
        </button>
        <button className="bg-gray-900 opacity-80 text-white text-xl w-40 h-12 rounded-md">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VdoTitle;
