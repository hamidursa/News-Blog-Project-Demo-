import React, { useState } from "react";
import ListItems from "./ListItems";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Category = ({ menuShow }) => {
   let [moreShow, setMoreShow] = useState(false);
   let handleToggleMore = () => {
      setMoreShow(!moreShow);
   };
   return (
      <div
         className={`bg-[#F2F2F2] rounded-br-2xl shadow-[0px_8px_35px_0px_rgba(0,0,0,0.15)]
      absolute top-[72px] z-50 transition-all duration-300 overflow-hidden w-[240px]
      ${menuShow ? "left-0 opacity-100 visible px-4" : "-left-[280px] opacity-0 invisible px-0"}
   `}>
         <h2 className="mt-4 font-rob font-medium text-[20px] border-b border-[#DCDCDC] leading-6 p-2">
            Category
         </h2>
         <div className="pb-4">
            <ul className="flex flex-col p-2 items-left gap-3 border-b border-[#DCDCDC]">
               <ListItems
                  list={"Home"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Hill Districts"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Politics"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"National"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Administrative"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <span
                  onClick={handleToggleMore}
                  className="flex items-center hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200">
                  <ListItems list={"More"} className="text-[16px] " />
                  <MdOutlineKeyboardArrowDown
                     className={`${
                        moreShow
                           ? "hidden"
                           : "cursor-pointer bg-transparent text-black"
                     }`}
                  />
                  <MdOutlineKeyboardArrowUp
                     className={`${
                        moreShow
                           ? "cursor-pointer bg-transparent text-black"
                           : "hidden"
                     }`}
                  />
               </span>

               <span
                  className={`${
                     moreShow
                        ? " flex flex-col p-2 items-left gap-3 w-auto rounded-xl top-[5px] left-0"
                        : "hidden"
                  }`}>
                  <ListItems
                     list={"Education"}
                     className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
                  />
                  <ListItems
                     list={"Health"}
                     className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
                  />
                  <ListItems
                     list={"Court & Law"}
                     className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
                  />
               </span>
            </ul>

            <ul className="flex flex-col p-2 items-left gap-3 border-b border-[#DCDCDC]">
               <ListItems
                  list={"Video"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Photo"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Podcast"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
            </ul>
            <ul className="flex flex-col p-2 items-left gap-3">
               <ListItems
                  list={"Opinion"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Interview"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
               <ListItems
                  list={"Writer"}
                  className="text-[16px] hover:bg-[#dbd9d9] px-1.5 rounded-[5px] transition-all duration-200"
               />
            </ul>
         </div>
      </div>
   );
};

export default Category;
