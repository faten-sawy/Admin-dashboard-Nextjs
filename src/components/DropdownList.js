import React from 'react'
/* import styles from "./Dropdown.module.css"
 */const DropdownList = ({data}) => {
  return (
    <select
      className="text-[14px] font-normal max-[480px]:mb-3 text-[#616161] w-[126px] border-[1px] border-[#E0E0E0] mr-9 rounded-[3px] h-[40px] bg-[#FFFFFF]"
      value="Test"
      style={{ direction: "rtl" }}
    >
      <option>الحالة</option>
      <option>مجموعة المتابعة</option>
    </select>
  );
}

export default DropdownList