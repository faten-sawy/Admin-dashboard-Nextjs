import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/Vector.svg"
import { ReactComponent as Analysis } from  "../../assets/Icons/bar-chart-statistics-svgrepo-com.svg";
import { ReactComponent as Apps } from "../../assets/Icons/apps-svgrepo-com.svg"
import { ReactComponent as Clock } from "../../assets/Icons/history-time-clock-watch-timer-alarm-schedule-svgrepo-com.svg"
import { ReactComponent as Settings } from "../../assets/Icons/settings-svgrepo-com.svg"
import { ReactComponent as MedicalRecords } from "../../assets/Icons/medical-records-svgrepo-com.svg"
import { ReactComponent as Report } from "../../assets/Icons/report-svgrepo-com.svg"
import Image from 'next/image';
const SideBar = () => {
  const [date,setDate] = useState("")
  const [time,setTime] = useState("")
  useEffect(()=>{
    getDate()
  },[])
  const getDate=()=>{
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date()
    console.log(date.getHours(),date.getMinutes(),date.getSeconds())

    const realDate = `${date.getDate()}-${
      months[date.getMonth()]
    }-${date.getFullYear()}`;

    const realTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    setDate(realDate);
    setTime(realTime)
  }
  return (
    <div className="w-[7.33%] bg-white h-[837px] relative  max-md:hidden flex flex-col justify-start py-[28px] items-center">
      <Image src={logo} alt="logo" className="w-[60%] mb-[24px] h-[62px]" />
      <div>
        <p className="text-[#414749] md:max-lg:text-[16px] font-semibold text-[22px] text-center">
          {time}
        </p>
        <p className="text-[#BEBAB4] font-medium 2xl:text-[18px] lg:text-[12px] md:text-[9px]">
          {date}
        </p>
      </div>
      <ul className="mt-[44px] w-full">
        <li className="flex justify-center p-0 bg-[#ff65504d] items-center h-[80px] border-l-[1px] border-[#F00100]">
          <Analysis fill="#F00100" width={35} height={35} />
        </li>
        <li className="flex justify-center p-0 bg-[#ff65504d] items-center h-[80px] border-l-[1px] border-[#F00100]">
          <Report fill="#F00100" width={35} height={35} />
        </li>
        <li className="flex justify-center p-0 bg-[#ff65504d] items-center h-[80px] border-l-[1px] border-[#F00100]">
          <Apps fill="#F00100" width={35} height={35} />
        </li>
        <li className="flex justify-center p-0 bg-[#ff65504d] items-center h-[80px] border-l-[1px] border-[#F00100]">
          <Settings fill="#F00100" width={35} height={35} />
        </li>
        <li className="flex justify-center p-0 bg-[#ff65504d] items-center h-[80px] border-l-[1px] border-[#F00100]">
          <MedicalRecords fill="#F00100" width={35} height={35} />
        </li>
        <li className="flex justify-center p-0 bg-[#ff65504d] items-center h-[80px] border-l-[1px] border-[#F00100]">
          <Clock fill="#F00100" width={35} height={35} />
        </li>
      </ul>
    </div>
  );
}

export default SideBar