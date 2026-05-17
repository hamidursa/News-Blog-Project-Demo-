import React from "react";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import TopNewsbBn from "./Layouts/TopNewsBn";
import { MdOutlineArrowOutward } from "react-icons/md";

import TopImg from "../assets/Image/Bangla/top.png"
import Bnimg1 from "../assets/Image/Bangla/img1.png"
import Bnimg2 from "../assets/Image/Bangla/img2.png"
import Bnimg3 from "../assets/Image/Bangla/img3.png"
import Bnimg4 from "../assets/Image/Bangla/img4.png"
import NewsHeadBn from "./Layouts/NewsHeadBn";
import MostReadBn from "./UI/MostReadBn";


const Bangla = () => {
   let banglaTopNews = [
      {
         img: TopImg,
         topic: "এনসিপিসহ ১৪৪টি দল আবেদন",
         head: "এনসিপির নিবন্ধন আবেদনে ছয় ঘাটতি, সংশোধনের জন্য ইসির চিঠি",
         desp: "রাজনৈতিক দল হিসেবে নিবন্ধনের জন্য জাতীয় নাগরিক পার্টির (এনসিপি) করা আবেদনে ছয়টি বিষয়ে ত্রুটি বা ঘাটতি পেয়েছে নির্বাচন কমিশন (ইসি)। প্রাথমিক যাচাইয়ে পাওয়া এসব ত্রুটি সংশোধন করে আগামী ৩ আগস্টের মধ্যে উপযুক্ত দলিল দাখিল করতে দলটিকে চিঠি দিয়েছে ইসি।",
      },
   ];

   let bnNewshead = [
      {
         topic: "",
         head: "অমীমাংসিত সংস্কার প্রস্তাব নিয়ে গণশুনানি করতে আলী রীয়াজকে চিঠি আইনজীবীর",
         pubsh_time: "২ ঘন্টা আগে",
         des: "|",
         catg: "রাজনীতি",
         img: Bnimg2,
      },
      {
         topic: "",
         head: "চট্টগ্রামে পটিয়ার পর নগরেও সড়ক অবরোধ বৈষম্যবিরোধী ও এনসিপির নেতা-কর্মীদের",
         pubsh_time: "৩ ঘন্টা আগে",
         des: "|",
         catg: "জাতীয়",
         img: Bnimg1,
      },
      {
         topic: "",
         head: "ফেব্রুয়ারি ও এপ্রিল সামনে রেখে ভোটের প্রস্তুতি নিচ্ছে ইসি",
         pubsh_time: "৪ ঘন্টা আগে",
         des: "|",
         catg: "জাতীয়",
         img: Bnimg3,
      },
      {
         topic: "নতুন অর্থবছর ",
         head: "• অনিশ্চয়তা আর চ্যালেঞ্জে ব্যবসা-বাণিজ্যে গতি কম",
         pubsh_time: "৪ ঘন্টা আগে",
         des: "|",
         catg: "অর্থনীতি",
         img: Bnimg4,
      },
   ];

   return (
      <section className="pt-10 bg-[#181B22] pb-10 sm:px-0 px-4" id="politics">
         <Container>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-1 items-center gap-2">
                <h2 className="font-noto font-medium text-[24px] text-textcol2 whitespace-nowrap">
                   বাংলা
                </h2>
                <div className="flex-1 h-px bg-[#808080]"></div>
             </div>
            <div className="hidden sm:flex items-center gap-1 text-textcol2 hover:text-blue-400 transition-all duration-200">
                                         <a href="#politics" className="font-noto font-normal text-[14px] leading-3.5 ">আরও পড়ুন</a>
                                       <MdOutlineArrowOutward />
                                       </div>
           </div>

            <div className="flex flex-col sm:flex-row items-center gap-12 mt-8">
               <div> 
                  <h2 className="font-noto font-normal mb-4 text-[24px] text-textcol2 px-2 sm:px-0">রাজনীতি</h2>
                  {banglaTopNews.map((newsbn, index) => (
                     <TopNewsbBn key={index} topnewsb={newsbn} />
                  ))}
               </div>

               <div className="flex flex-col gap-6">
                  <div className="w-fit flex flex-col items-center">
                     <h2 className="font-noto font-normal text-[20px] sm:text-[24px] text-textcol2">সর্বশেষ</h2>
                     <div className="w-full h-px bg-textcol2"></div>
                  </div>
                  {bnNewshead.map((bnitem, index)=>(
                     <NewsHeadBn key={index} headbn={bnitem}/>
                  ))}
               </div>
            </div>

            <MostReadBn/>
         </Container>
      </section>
   );
};

export default Bangla;
