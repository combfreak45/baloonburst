import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-slate-300 justify-center items-center gap-5">
      <div className="text-7xl font-serif font-semibold text-blue-600">
        Home
      </div>
      <div className="font-thin text-xl">"Want to Explore some cool game?"</div>
      <div className=" bg-red-200 px-4 py-2 rounded-2xl font-semibold hover:scale-110">
        {" "}
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;
