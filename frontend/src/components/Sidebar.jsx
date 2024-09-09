
import React from 'react';
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './sidebar.css'; // Adjust the path as needed


const Sidebar = () => {
    const data = [
        {
            title: "All tasks",
            icon: <CgNotes />,
            link: '/',
        },
        {
            title: "Important tasks",
            icon: <MdLabelImportant />,
            link: '/importanttasks',
        },
        {
            title: "Completed tasks",
            icon: <FaCheckDouble />,
            link: '/completedtasks',
        },
        {
            title: "Incomplete tasks",
            icon: <TbNotebookOff />,
            link: '/incompletedtasks',
        },
    ];

    return (
        <div className="bg-gray-800 text-gray-100 h-screen p-4 space-y-4">
            <div>
                <h2 className="text-2xl font-bold">The code is master</h2>
                <h4 className='mb-1 text-gray-400 text-sm'>abhinav23@gmail.com</h4>
                <hr className="border-gray-600" />
            </div>
            <div className="space-y-2">
                {data.map((item, index) => (
                    <Link to={item.link} key={index} className="block">
                        <p className='flex items-center hover:bg-gray-700 p-2 rounded transition-all duration-300 text-lg'>
                            {item.icon} <span className="ml-2">{item.title}</span>
                        </p>
                    </Link>
                ))}
            </div>
            <div>
                <button className='bg-gray-600 w-full p-2 rounded hover:bg-gray-500 transition-colors duration-300'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;