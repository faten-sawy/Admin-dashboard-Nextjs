import React from 'react'
import DropdownList from '../DropdownList'
import ReportTeamTable from './ReportTeamTable'
import ReportTeamTableSmallScreen from './ReportTeamTableSmallScreen'

const ReportsTeam = () => {
    const data = {
        first:"first",
        second:"Hello"
    }
    
  return (
    <div className="w-full min-h-[394px] h-auto mb-[31px] p-6 bg-white rounded-[3px]  shadow-btnShadow">
      <div className="flex justify-between">
        <div>
          <DropdownList data={data} />
          <DropdownList data={{ first: "Hamada", second: "Fathy" }} />
        </div>
        <p className="text-[#414749] leading-[20px] text-[16px] font-semibold max-[480px]:w-[50%] text-right">
          <span className="font-medium pt-[2px]  text-[12px] leading-[15px]  mr-2 bg-[#F00100] w-[20px] h-[20px] inline-block text-center rounded-[20px] text-white">
            5
          </span>
          فرق البلاغات
        </p>
      </div>
      <div className="max-sm:hidden">
        <ReportTeamTable />
      </div>
      <div className="hidden max-sm:block">
        <ReportTeamTableSmallScreen />
      </div>
    </div>
  );
}

export default ReportsTeam