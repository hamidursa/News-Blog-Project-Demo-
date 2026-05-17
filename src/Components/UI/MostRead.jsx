import React, { Component } from "react";
import Img_1 from "../../assets/Image/ReadMoreCard/img1.png";
import Img_2 from "../../assets/Image/ReadMoreCard/img2.png";
import Img_3 from "../../assets/Image/ReadMoreCard/img3.png";
import Img_4 from "../../assets/Image/ReadMoreCard/img4.png";
import MostReadDis from "../Layouts/MostReadDis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

const MostRead = () => {
   let mstRead = [
      {
         img: Img_1,
         head: "Japan will provide 4.8 million dollars in financial support to the Election Commission for the ballot project.",
         time: "3 week ago",
         views: "4k",
      },
      {
         img: Img_2,
         head: "Bangladesh ended the first half in the lead thanks to Rituparna’s goal.",
         time: "2 week ago",
         views: "3k",
      },
      {
         img: Img_3,
         head: "Former CEC Nurul Huda gave a confessional statement in court.",
         time: "1 week ago",
         views: "2k",
      },
      {
         img: Img_4,
         head: "Ariful is on the streets demanding the withdrawal of Sylhet’s DC, calling him “failed.”",
         time: "5 days ago",
         views: "950",
      },
      {
         img: Img_1,
         head: "Japan will provide 4.8 million dollars in financial support to the Election Commission for the ballot project.",
         time: "3 week ago",
         views: "4k",
      },
      {
         img: Img_2,
         head: "Bangladesh ended the first half in the lead thanks to Rituparna’s goal.",
         time: "2 week ago",
         views: "3k",
      },
      {
         img: Img_3,
         head: "Former CEC Nurul Huda gave a confessional statement in court.",
         time: "1 week ago",
         views: "2k",
      },
      {
         img: Img_4,
         head: "Ariful is on the streets demanding the withdrawal of Sylhet’s DC, calling him “failed.”",
         time: "5 days ago",
         views: "950",
      },
   ];
   let mstRead2 = [
      {
         img: Img_1,
         head: "Japan will provide 4.8 million dollars in financial support to the Election Commission for the ballot project.",
         time: "3 week ago",
         views: "4k",
      },
      {
         img: Img_2,
         head: "Bangladesh ended the first half in the lead thanks to Rituparna’s goal.",
         time: "2 week ago",
         views: "3k",
      },
      {
         img: Img_3,
         head: "Former CEC Nurul Huda gave a confessional statement in court.",
         time: "1 week ago",
         views: "2k",
      },
      {
         img: Img_4,
         head: "Ariful is on the streets demanding the withdrawal of Sylhet’s DC, calling him “failed.”",
         time: "5 days ago",
         views: "950",
      },
   ];

   const NextArrow = ({ onClick }) => (
      <MdOutlineKeyboardArrowRight
         onClick={onClick}
         className="absolute -top-5 right-0 transform -translate-y-1/2 z-20 text-[40px] md:text-[50px] text-textcol bg-transparent rounded-full p-2 cursor-pointer hover:text-hvcol transition-all duration-300 hidden md:block"
      />
   );

   const PrevArrow = ({ onClick }) => (
      <MdOutlineKeyboardArrowLeft
         onClick={onClick}
         className="absolute -top-5 right-12 md:right-20 transform -translate-y-1/2 z-20 text-[40px] md:text-[50px] text-textcol bg-transparent rounded-full p-2 cursor-pointer hover:text-hvcol transition-all duration-300 hidden md:block"
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
      <section className="mt-8 mx-0">
         <div className="flex items-center gap-2.5 mb-6">
            <h2 className="font-rob font-medium text-[20px] sm:text-[24px] text-[#262626] whitespace-nowrap">
               Most Read
            </h2>
            <div className="flex-grow h-px bg-black"></div>
         </div>

         <div className="w-full">
            <Slider {...settings}>
               {mstRead.map((item, index) => (
                  <MostReadDis key={index} news={item} />
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default MostRead;
