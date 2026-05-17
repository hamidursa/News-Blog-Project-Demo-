import React from "react";
import Img_1 from "../../assets/Image/ReadMoreCard/img1.png";
import Img_2 from "../../assets/Image/ReadMoreCard/img2.png";
import Img_3 from "../../assets/Image/ReadMoreCard/img3.png";
import Img_4 from "../../assets/Image/ReadMoreCard/img4.png";
import MostReadDisBn from "../Layouts/MostReadDisBn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const MostReadBn = () => {
   let mstReadBn = [
      {
         img: Img_1,
         head: "ব্যালট প্রকল্পে ইসিকে ৪৮ লাখ ডলারের আর্থিক সহায়তা দেবে জাপান",
         time: "৪ সপ্তাহ আগে",
         views: "৫ হাজার",
      },
      {
         img: Img_2,
         head: "ঋতুপর্ণার গোলে এগিয়ে থেকে প্রথমার্ধ শেষ করল বাংলাদেশ",
         time: "৩ সপ্তাহ আগে",
         views: "৪ হাজার",
      },
      {
         img: Img_3,
         head: "আদালতে স্বীকারোক্তিমূলক জবানবন্দি দিলেন সাবেক সিইসি নূরুল হুদা",
         time: "২ সপ্তাহ আগে",
         views: "২ হাজার",
      },
      {
         img: Img_4,
         head: "সিলেটের ডিসিকে ‘ব্যর্থ’ দাবি করে প্রত্যাহার চেয়ে রাজপথে অবস্থান আরিফুলের",
         time: "২ সপ্তাহ আগে",
         views: "১ হাজার",
      },
      {
         img: Img_1,
         head: "ব্যালট প্রকল্পে ইসিকে ৪৮ লাখ ডলারের আর্থিক সহায়তা দেবে জাপান",
         time: "৪ সপ্তাহ আগে",
         views: "৫ হাজার",
      },
      {
         img: Img_2,
         head: "ঋতুপর্ণার গোলে এগিয়ে থেকে প্রথমার্ধ শেষ করল বাংলাদেশ",
         time: "৩ সপ্তাহ আগে",
         views: "৪ হাজার",
      },
      {
         img: Img_3,
         head: "আদালতে স্বীকারোক্তিমূলক জবানবন্দি দিলেন সাবেক সিইসি নূরুল হুদা",
         time: "২ সপ্তাহ আগে",
         views: "২ হাজার",
      },
      {
         img: Img_4,
         head: "সিলেটের ডিসিকে ‘ব্যর্থ’ দাবি করে প্রত্যাহার চেয়ে রাজপথে অবস্থান আরিফুলের",
         time: "২ সপ্তাহ আগে",
         views: "১ হাজার",
      },
   ];

   const NextArrow = ({ onClick }) => (
      <MdOutlineKeyboardArrowRight
         onClick={onClick}
         className="absolute -top-5 right-0 transform -translate-y-1/2 z-20 text-[40px] md:text-[50px] text-textcol2 bg-transparent rounded-full p-2 cursor-pointer hover:text-hvcol transition-all duration-300 hidden md:block"
      />
   );

   const PrevArrow = ({ onClick }) => (
      <MdOutlineKeyboardArrowLeft
         onClick={onClick}
         className="absolute -top-5 right-12 md:right-20 transform -translate-y-1/2 z-20 text-[40px] md:text-[50px] text-textcol2 bg-transparent rounded-full p-2 cursor-pointer hover:text-hvcol transition-all duration-300 hidden md:block"
      />
   );

   var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               arrows: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         }
      ]
   };

   return (
      <section className="mt-10 relative">
         <div className="flex flex-col justify-center w-fit gap-2 mb-6">
            <h2 className="font-noto font-normal text-[24px] text-textcol2">
               সর্বাধিক পঠিত
            </h2>
            <div className="w-full h-px bg-[#EC8D49]"></div>
         </div>

         <div className="w-full">
            <Slider {...settings}>
               {mstReadBn.map((item, index) => (
                  <MostReadDisBn key={index} newsbn={item} />
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default MostReadBn;
