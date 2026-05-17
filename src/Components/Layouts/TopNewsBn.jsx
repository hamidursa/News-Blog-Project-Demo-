import React from 'react'
import Flex from './Flex'

const TopNewsBn = ({topnewsb}) => {
  return (
    <div className="w-full sm:w-[628px] max-w-full px-2 sm:px-0">
         <img src={topnewsb.img} alt={topnewsb.head} className="rounded-xl mt-6" />
         <Flex className="flex-col gap-2">
            <h4 className="font-noto text-[16px] sm:text-2xl font-semibold leading-5 sm:leading-6 text-textcol2 sm:text-[#EC8D49] mt-3 sm:mt-4">
               {topnewsb.topic}
            </h4>
            <h2 className="font-noto text-[32px] sm:text-[40px] text-textcol2 leading-12 font-semibold mt-2 cursor-pointer hover:text-[#BD713A] transition-all duration-300">
               {topnewsb.head}
            </h2>
            <p className="font-noto text-[14px] sm:text-[16px] font-normal leading-5 text-[#DCDCDC] mt-2 relative left-2">
                  <span className="w-px h-full bg-[#EC8D49] absolute top-0 -left-2"></span>
               {topnewsb.desp}
            </p>
            <div className="flex items-center gap-2">
               <h6 className="font-noto text-textcol2 text-[14px] font-normal ">
                  {topnewsb.time}
               </h6>
               <h6 className="font-noto text-[16px] font-normal text-[#BD713A]">
                  {topnewsb.line}
               </h6>
               <h6 className="font-noto text-[textcol2] text-[14px] font-normal ">
                  {topnewsb.place}
               </h6>
            </div>
         </Flex>
      </div>
  )
}

export default TopNewsBn
