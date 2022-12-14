import React from 'react'
import message from "../../../assets/images/message-2.svg"
import edit from "../../../assets/images/edit-2.svg"
import Image from 'next/image'
const ReportTeamTable = () => {
    const arr=[1,1,2,3,5]
   
  return (
    <div className="flex justify-end flex-col items-end mt-[33px]">
      <div className="w-[76%] justify-between flex flex-row-reverse">
        <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
          <span>^</span>
          رقم البلاغ
        </p>
        <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
          <span>^</span>
          الفرق
        </p>
        <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
          نوع البلاغ
        </p>
        <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
          مرحلة البلاغ
        </p>
        <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
          مدة الرحلة
        </p>
      </div>
      <div className="w-full flex flex-col items-end mt-8">
        {arr.map((item) => (
          <div key={item} className="flex mb-3 mt-2 w-full justify-between  ">
            <div className="w-[8.8%] flex">
              <Image
                src={edit}
                alt="edit"
                className="mr-[37px] hover:cursor-pointer w-[20px] h-[20px]"
              />
              <Image
                src={message}
                alt="message"
                className="hover:cursor-pointer w-[20px] h-[20px]"
              />
            </div>
            <div className="w-[76%] flex flex-row-reverse justify-between">
              <p className="text-[#242424] text-[14px] font-medium">120055</p>
              <p className="text-[#242424] text-[14px] font-medium">فريق04</p>
              <p className="text-[#242424] text-[14px] font-medium">بلاغ نقل</p>
              <p className="text-[#242424] text-[14px] font-medium">
                مغادرة الموقع
              </p>
              <p className="text-[#242424] text-[14px] font-medium">00:10:20</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportTeamTable