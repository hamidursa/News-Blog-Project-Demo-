import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

const NewsHead = ({ head, bBorder }) => {
   return (
      <div
         className={`flex justify-between items-center gap-4 w-full ${
            !bBorder ? "border-b" : ""
         } sm:border-0 border-[#DCDCDC] pb-6 sm:pb-0`}>
         <div className="flex-1 min-w-0">
            <h2 className="font-rob text-[16px] sm:text-[20px] sm:leading-[30px] font-medium text-textcol cursor-pointer hover:text-hvcol transition-all duration-300">
               <span className="text-[#BD713A]  ">{head.topic}</span>
               {head.head}
            </h2>
            <div className="flex flex-wrap items-center mt-2 gap-2">
               <h6 className="flex text-[14px] items-center gap-1 font-rob ">
                  <MdOutlineWatchLater />
                  {head.pubsh_time}
               </h6>
               <h6 className="text-[#BD713A] font-rob ">{head.des}</h6>
               <h6 className="font-rob text-[14px] ">{head.catg}</h6>
               {head.place && <h6 className="font-rob text-[14px] ">{head.place}</h6>}
            </div>
         </div>
         <img
            src={head.img}
            alt={head.topic}
            className="w-[124px] sm:w-[193px] rounded-lg shrink-0 object-cover"
         />
      </div>
   );
};

export default NewsHead;
