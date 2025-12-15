import React from "react";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Profile = () => {
  return (
    <div className="bg-[#5a51d6] h-screen w-screen flex items-center justify-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1592636120953-3d2b28ebfd69?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,backgroundPosition: "center",
        backgroundSize: "cover",}}>
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 ">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Profile;
