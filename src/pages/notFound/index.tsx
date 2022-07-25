import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#022976]">
      <h1 className="text-9xl font-extrabold text-[#00cca3]">404</h1>
      <p className="text-lg font-extrabold text-[#00cca3]">Page Not Found!</p>
      <Link to="/">
        <button className="mt-5 px-8 py-3 bg-[#022976] rounded-md border text-[#00cca3] border-[#00cca3] hover:bg-[#00FFCC] hover:text-[#022976]">
          Go Home
        </button>
      </Link>
    </main>
  );
};

export default NotFound;
