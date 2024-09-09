import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './styles.css';

const Home = () => {
    let token=localStorage.getItem("token")
    useEffect(()=>{
        fetchData()
    })
    async function fetchData(){
        console.log(token)
      let data= await fetch("http://localhost:3001/api/v2/get",{
            headers: {
                'authorization': `Bearer ${token}` // Forward the token in the proper format
            }
        })
        data=await data.json()
        let user=JSON.stringify(data)
        localStorage.setItem("user",user)
        console.log("USER FROM LOCAL STORAGE",JSON.parse(localStorage.getItem("user"))
        )
    }
    return (
        <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
            {/* Sidebar */}
            <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
