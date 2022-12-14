import React from 'react'
import message from "../../../assets/images/message-2.svg";
import edit from "../../../assets/images/edit-2.svg";
import Image from 'next/image';
const ReportTeamTableSmallScreen = () => {
    const arr = [1, 1, 2, 3, 5];
  return (
    <div className="flex justify-end flex-col items-end mt-[33px] ">
      {arr.map((item) => (
        <div key={item} className="mb-3 flex justify-between w-full rounded-[10px] border-[1px] px-[16px] pt-[25px] pb-[16px] border-[#D7D7D7] flex-row-reverse">
          <div>
            <div className="flex flex-row-reverse">
              <div className=" justify-between flex flex-col">
                <p className="text-[#B3B5BC] h-[25px] text-[14px] text-right font-normal leading-4">
                  <span>^</span>
                  رقم البلاغ
                </p>
                <p className="text-[#B3B5BC] h-[25px] text-[14px] text-right font-normal leading-4">
                  <span>^</span>
                  الفرق
                </p>
                <p className="text-[#B3B5BC] h-[25px] text-[14px] text-right font-normal leading-4">
                  نوع البلاغ
                </p>
                <p className="text-[#B3B5BC] h-[25px] text-[14px] text-right font-normal leading-4">
                  مرحلة البلاغ
                </p>
                <p className="text-[#B3B5BC] h-[25px] text-[14px] text-right font-normal leading-4">
                  مدة الرحلة
                </p>
              </div>
              <div className="flex flex-col justify-between mr-7">
                <p className="text-[#242424] text-[14px] text-right font-medium leading-4 h-[25px]">120055</p>
                <p className="text-[#242424] text-[14px] text-right font-medium leading-4 h-[25px]">فريق04</p>
                <p className="text-[#242424] text-[14px] text-right font-medium leading-4 h-[25px]">
                  بلاغ نقل
                </p>
                <p className="text-[#242424] text-[14px] text-right font-medium leading-4 h-[25px]">
                  مغادرة الموقع
                </p>
                <p className="text-[#242424] text-[14px] text-right font-medium leading-4 h-[25px]">
                  00:10:20
                </p>
              </div>
            </div>
          </div>
          <div className=" flex">
            <Image
              src={edit}
              alt="edit"
              className="mr-[37px] hover:cursor-pointer h-[20px] w-[20px]"
            />
            <Image
              src={message}
              alt="message"
              className="hover:cursor-pointer h-[20px] w-[20px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReportTeamTableSmallScreen