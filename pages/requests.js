import Reports from "../src/components/Requests/Reports"
import ReportsTeam from "../src/components/Requests/ReportsTeam"
import ReportTracking from "../src/components/Requests/ReportTracking"
import ReportTrackingSmallScreen from "../src/components/Requests/ReportTeamTableSmallScreen";
import NavBar from "../src/components/NavBar"
import SideBar from "../src/components/SideBar";
const Requests = () => {
  return (
    <div
      style={{ width: "100%", height: "100%", backgroundColor: "#E6E2E2" }}
      className=" flex flex-col bg-black"
    >
      <NavBar />
      {/*  */}
      <div className="lg:max-w-[1800px] lg:mx-[60px] lg:max-xl:mx-[20px] md:mx-[10px] mx-[10px] relative flex flex-row-reverse justify-between">
        {/* <SideBar /> */}
        <div className=" md:w-[91.5%] w-full">
          <div className="w-full flex lg:flex-row flex-col-reverse justify-between">
            <div className="lg:w-[54%] w-full flex flex-col">
              <ReportsTeam />
              {/* For Tablet & large screens */}
              <div className="max-sm:hidden">
                <ReportTracking />
              </div>
              {/* For Small screen */}
              <div className="hidden max-sm:block">
                <ReportTrackingSmallScreen />
              </div>
            </div>
            <Reports />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Requests;
