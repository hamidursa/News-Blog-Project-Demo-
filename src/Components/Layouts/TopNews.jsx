import React from "react";
import Flex from "./Flex";

const TopNews = ({ topnews }) => {
   return (
      <div className="w-full sm:w-[628px] max-w-full">
         <img src={topnews.img} alt={topnews.head} className="rounded-xl  " />
         <Flex className="flex-col">
            <h4 className="font-rob text-[16px] sm:text-2xl font-semibold leading-5 sm:leading-6 text-[#EC8D49] mt-3 sm:mt-4">
               {topnews.topic}
            </h4>
            <h2 className="font-rob text-[32px] sm:text-[40px] sm:leading-12 font-semibold mt-2 cursor-pointer hover:text-[#BD713A] transition-all duration-300">
               {topnews.head}
            </h2>
            <p className="font-rob text-[14px] sm:text-[16px] font-normal leading-5 text-[#515151] mt-2 relative left-2">
                  <span className="w-px h-full bg-black absolute top-0 -left-2"></span>
               {topnews.desp}
            </p>
            <div className="flex mt-2 items-center gap-2">
               <h6 className="font-rob text-[14px] font-normal ">
                  {topnews.time}
               </h6>
               <h6 className="font-rob text-[16px] font-normal text-[#BD713A]">
                  {topnews.line}
               </h6>
               <h6 className="font-rob text-[14px] font-normal ">
                  {topnews.place}
               </h6>
            </div>
         </Flex>
      </div>
   );
};

export default TopNews;
