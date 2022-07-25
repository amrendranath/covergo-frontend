import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-extrabold capitalize">hello there!</h1>
      <p className="text-lg mt-8">Let's buy some insurance. It is going to take only a few steps.</p>
      <Link to="/form">
        <button className="mt-7 px-12 py-3 bg-black rounded border font-medium text-white border-black hover:scale-105">Start</button>
      </Link>
    </main>
  );
};

export default Welcome;
