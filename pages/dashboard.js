import Paramedics from "../components/Dashboard/Paramedics";
import Calls from "../components/Dashboard/Calls";
import Reports from "../components/Dashboard/Reports";
import Cases from "../components/Dashboard/Cases";
import ReportsType from "../components/Dashboard/ReportsType";
import LocationMap from "../components/Dashboard/LocationMap";
import Table from "../components/Dashboard/Table";
import Hospitals from "../components/Dashboard/Hospitals";
import SemiPie from "../components/Dashboard/Charts/semi-pie";
const Dashboard = () => {
  return (
    <div className="flex xl:flex-row-reverse min-h-full flex-col-reverse justify-center w-full max-w-[1667px] overflow-x-hidden p-[20px] ">
      <div className="xl:w-[18.5%] h-max xl:ml-[20px] w-full">
        <Calls />
        <Reports />
        <Cases />
        <Hospitals />
        <ReportsType />
      </div>
      <div className="xl:w-[80.5%] h-max w-full">
        <div className="flex sm:flex-row justify-between flex-col">
          <LocationMap />
          <Paramedics />
        </div>
        <div className="flex flex-row flex-wrap justify-between md:justify-center ">
          <SemiPie
            bgColor="#CAF2F8"
            color="#8BD7E2"
            text="زمن تحرك الفرقة"
            max="40"
            min="10"
            time="0:05:12"
            timeType="دقيقة"
          />
          <SemiPie
            bgColor="#E8EBFA"
            color="#C5CBFA"
            text="زمن تحرك الفرقة"
            max="40"
            min="10"
            time="0:05:12"
            timeType="دقيقة"
          />
          <SemiPie
            bgColor="#FFEEB5"
            color="#F9D14B"
            text="زمن تحرك الفرقة"
            max="40"
            min="10"
            time="0:05:12"
            timeType="دقيقة"
          />
          <SemiPie
            bgColor="#C7D0FF"
            color="#4874FF"
            text="زمن تحرك الفرقة"
            max="40"
            min="10"
            time="0:05:12"
            timeType="دقيقة"
          />
          <SemiPie
            bgColor="#E6EAEE"
            color="#908A81"
            text="زمن تحرك الفرقة"
            max="40"
            min="10"
            time="0:05:12"
            timeType="دقيقة"
          />
          <SemiPie
            bgColor="#F7CCCE"
            color="#CE666B"
            text="زمن تحرك الفرقة"
            max="40"
            min="10"
            time="0:05:12"
            timeType="دقيقة"
          />
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
