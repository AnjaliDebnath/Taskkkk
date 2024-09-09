import React, { useState } from "react";
import Cards from "../components/Cards";
import { IoAddCircle } from "react-icons/io5";
import InputData from "../components/Inputdata";

const Alltasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");

    return (
        <>
            <div className="p-4">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setInputDiv("fixed")}
                        className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-400 transition-all duration-300"
                    >
                        <IoAddCircle />
                    </button>
                </div>
                <Cards home={"true"} setInputDiv={setInputDiv} />
            </div>
            <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
        </>
    );
}

export default Alltasks;
