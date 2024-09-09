import React from "react";
import './inputdata.css';
import { IoMdCloseCircle } from "react-icons/io";

const InputData = ({ InputDiv, setInputDiv }) => {
  const handleClose = () => {
    setInputDiv("hidden");
  };

  return (
    <>
      <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>    <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full `}>
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-gray-900 p-4 rounded">
          <div className="text-xl flex justify-between items-end mb-4">
            <button onClick={handleClose} className="text-gray-300 hover:text-gray-100">
              <IoMdCloseCircle />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full mb-4 bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description"
            className="px-3 py-2 rounded w-full bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold hover:text-white transition ease-in-out duration-300">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;