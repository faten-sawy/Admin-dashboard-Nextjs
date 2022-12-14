import React from 'react'

const ReportTracking = () => {
  const arr = [1, 1, 2, 3, 5];
  return (
    <div className="w-full min-h-[394px] h-auto bg-white rounded-[3px] shadow-btnShadow p-6">
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
            مرحلة البلاغ
          </p>
          <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
            وقت بداية المرحلة
          </p>
          <p className="text-[#B3B5BC] text-[14px] font-medium leading-4">
            مدة الرحلة
          </p>
        </div>
        <div className="w-full flex flex-col items-end mt-8">
          {arr.map((item) => (
            <div className="flex mb-3 mt-2 w-full justify-between  ">
              <div className="w-[15%]">
                <button className="rounded-[3px] w-full text-white text-[14px] font-medium leading-4 bg-[#4874FF] h-[38px]">
                  وصول للموقع
                </button>
              </div>
              <div className="w-[76%] flex flex-row-reverse justify-between">
                <p className="text-[#242424] text-[14px] font-medium">120055</p>
                <p className="text-[#242424] text-[14px] font-medium">فريق04</p>
                <p className="text-[#242424] text-[14px] font-medium">
                  بلاغ نقل
                </p>
                <p className="text-[#242424] text-[14px] font-medium">
                  مغادرة الموقع
                </p>
                <p className="text-[#242424] text-[14px] font-medium">
                  00:10:20
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mt-3 font-medium text-[14px] leading-4 text-white bg-[#F00100] rounded-[5px] h-[40px] w-[116px]">
          اغلاق المهمة
        </button>
      </div>
    </div>
  );
}

export default ReportTracking