import React from 'react'
import ReportRow from './ReportRow';
import van from "../../../assets/Icons/van.svg"
import emergency from  "../../../assets/Icons/emergency.svg"
import network from "../../../assets/Icons/network.svg"
import filter from "../../../assets/Icons/filter.svg"
import Image from 'next/image';
const Reports = () => {

    const reportType = [
      { type: "نقل", number: "05", icon: van },
      { type: "طوارئ", number: "15", icon: emergency },
      { type: "تغطية", number: "10", icon: network },
    ];
    const reportStatus = [
      { status: "الجديدة", number: "12" },
      { status: "قيد التنفيذ", number: "0" },
      { status: "التطبيق", number: "10" },
      { status: "المحفوظة", number: "9" },
    ];
  return (
    <div className="lg:w-[44.7%] w-full lg:mb-0 mb-[30px] p-6 bg-white shadow-btnShadow rounded-[3px]">
      <div className="flex justify-between items-center">
        <button className="bg-[#4874FF] w-[153px] h-[45px] font-medium leading-[20px] text-[16px] text-white rounded-[7px]">
          انشاء بلاغ جديد
          <span className="text-[20px] font-bold ml-[12.5px]"> +</span>
        </button>
        <div className="flex">
          <Image className="mr-[12px] mt-[5px] w-[16px] h-[11px]" src={filter} alt="filter icon" />
          <h3 className="text-[20px] leading-6 text-[#414749] font-['Montserrat'] font-medium">
            البلاغات
          </h3>
        </div>
      </div>
      <div className="flex justify-evenly flex-row-reverse items-center mt-[44px]">
        {reportType.map((item) => (
          <div key={item.type}>
            <p className="flex items-end">
              {item.type}
              <Image
                className="ml-[7px] w-[20px] h-[20px]"
                src={item.icon}
                alt="icon"
              />
              {/*  <span>{item.icon}</span> */}
            </p>
            <p className="text-center">{item.number}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-[21px]">
        {reportStatus.map((item) => (
          <div key={item} className="flex w-[118px] font-normal p-1 lg:max-2xl:w-[80px] max-[548px]:w-[80px]  text-white items-center justify-center h-[54px] shadow-btnShadow bg-[#F00100] rounded-[5px]">
            <span className="text-[10px]  bg-white text-black w-[15px] text-center rounded-[15px] relative bottom-3">
              {item.number}
            </span>
            <p className="text-[20%-10px] lg:max-2xl:text-[12px] max-[548px]:text-[12px] ">
              {item.status}
            </p>
          </div>
        ))}
      </div>
      <ReportRow />
      <ReportRow />
      <ReportRow />
      <ReportRow />
    </div>
  );
}

export default Reports