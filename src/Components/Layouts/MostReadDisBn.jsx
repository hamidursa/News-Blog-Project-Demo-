import React from "react";
import Flex from "./Flex";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MostReadDisBn = ({ newsbn }) => {
   return (
      <div className="w-full mt-4 px-3 flex flex-col gap-2">
         <img src={newsbn.img} alt={newsbn.head} className="w-full h-[180px] object-cover rounded-lg shrink-0" />
         <div className="flex-1 min-w-0">
            <h2 className="mt-2 font-noto font-normal sm:font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-snug text-textcol2 cursor-pointer hover:text-hvcol transition-all duration-300 line-clamp-2 min-h-[44px]">
               {newsbn.head}
            </h2>

            <Flex className="mt-2 items-center gap-2">
               <h6 className="font-noto text-textcol2 text-[13px] sm:text-[14px] font-normal">
                  {newsbn.time}
               </h6>
               <h6 className="text-[#BD713A] text-[15px]">|</h6>
               <h6 className="font-noto text-[13px] sm:text-[14px] normal text-textcol2 flex items-center gap-1">
                  <MdOutlineRemoveRedEye />
                  {newsbn.views}
               </h6>
            </Flex>
         </div>
      </div>
   );
};

export default MostReadDisBn;
