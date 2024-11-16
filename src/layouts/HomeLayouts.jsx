import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSidebar from "../LayoutComponent/LeftSideBar";
import RightSidebar from "../LayoutComponent/RightSidebar";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
        
      <Header />
      <LatestNews />
      <Navbar />
     
      <main className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 justify-items-center ">
      
        <aside className="md:col-span-3 w-full">
          <LeftSidebar/>
        </aside>

        <section className="md:col-span-6">
          <Outlet/>
        </section>

        <aside className="md:col-span-3 w-full">
          <RightSidebar/>
        </aside>

      </main>  


    </div>
  );
};

export default HomeLayouts;
