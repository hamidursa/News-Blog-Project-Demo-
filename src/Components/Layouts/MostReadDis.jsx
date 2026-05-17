import React from "react";
import Flex from "./Flex";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MostReadDis = ({ news }) => {
   return (
      <div className="w-full mt-4 px-3 flex flex-col gap-2">
         <img src={news.img} alt={news.head} className="w-full h-[180px] object-cover rounded-lg shrink-0" />
         <div className="flex-1 min-w-0">
            <h2 className="mt-2 font-rob font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-snug text-textcol cursor-pointer hover:text-hvcol transition-all duration-300 line-clamp-2 min-h-[44px]">
               {news.head}
            </h2>

            <Flex className="mt-2 items-center gap-2">
               <h6 className="font-rob text-[13px] sm:text-[14px] normal text-[#515151]">
                  {news.time}
               </h6>
               <h6 className="text-[#BD713A] text-[15px]">|</h6>
               <h6 className="font-rob text-[13px] sm:text-[14px] normal text-[#515151] flex items-center gap-1">
                  <MdOutlineRemoveRedEye />
                  {news.views}
               </h6>
            </Flex>
         </div>
      </div>
   );
};

export default MostReadDis;
