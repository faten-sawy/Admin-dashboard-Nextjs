import React from 'react'

const ReportRow = () => {
    const data = {
      number: "2222511420",
      reportDate: "10.07 12:20",
      address: "السعودية, رياض",
      period: "01:03:20",
    };
  return (
    <div className={`mt-[15px] relative after:content-[''] after:absolute after:w-[4px] after:right-[-2px] after:h-[50%] after:bg-red-500  flex sm:flex-row-reverse lg:flex-col 2xl:flex-row-reverse flex-col mb-[15px]  border-[1px] items-start px-[16px] pt-[25px] pb-[16px] 2xl:h-[99px] rounded-[10px] border-[#D7D7D7]  justify-between text-right`}>
      <div className="2xl:block sm:block flex flex-row-reverse justify-between w-full   lg:flex lg:flex-row-reverse lg:justify-between lg:w-full">
        <p className="text-[#C3C5CC] text-[14px]">
          رقم البلاغ
          <span>^</span>
        </p>
        <p className="text-[16px]">{data.number}</p>
      </div>
      {/* second */}
      <div className="2xl:block lg:flex sm:block flex flex-row-reverse justify-between w-full lg:flex-row-reverse lg:justify-between lg:w-full">
        <p className="text-[#C3C5CC] text-[14px]">
          موعد البلاغ
          <span>^</span>
        </p>
        <p className="text-[16px]">{data.reportDate}</p>
      </div>
      {/* third */}
      <div className="2xl:block sm:block lg:flex flex flex-row-reverse justify-between w-full lg:flex-row-reverse lg:justify-between lg:w-full">
        <p className="text-[#C3C5CC] text-[14px]">
          عنوان البلاغ
          <span>^</span>
        </p>
        <p className="text-[16px]">{data.address}</p>
      </div>
      {/* Fourth */}
      <div className="2xl:block sm:block lg:flex flex flex-row-reverse justify-between w-full lg:flex-row-reverse lg:justify-between lg:w-full">
        <p className="text-[#C3C5CC] text-[14px]">
          الفترة التراكمية
          <span>^</span>
        </p>
        <p className="text-[16px]">{data.period}</p>
      </div>
    </div>
  );
}

export default ReportRow