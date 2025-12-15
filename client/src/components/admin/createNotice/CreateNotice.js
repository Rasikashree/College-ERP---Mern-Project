import React from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Body from "./Body";

const CreateNotice = () => {
  return (
    <div className="bg-[#5a51d6] h-screen w-screen flex items-center justify-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1643430678195-8f7235f2fac3?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,backgroundPosition: "center",
        backgroundSize: "cover",}}>
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default CreateNotice;
