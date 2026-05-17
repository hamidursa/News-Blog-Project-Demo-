import React from 'react'

const OtherHead = ({bHead}) => {
  return (
    <div className="w-full">
      <div className='w-full h-px my-4 bg-[#DCDCDC]'></div>
      <div className='w-full flex gap-4 p-2 rounded-xl hover:bg-[#ecebeb] transition-all duration-200 cursor-pointer'>
      <img src={bHead.img} alt={bHead.head2}  className='w-[124px] sm:w-auto'/>
      <h2 className='font-rob font-medium text-[16px] sm:text-[20px] text-[#BD713A] sm:leading-[30px] '>{bHead.head1} <span className='text-textcol'>{bHead.head2}</span></h2>
    </div>
    </div>
  )
}

export default OtherHead
