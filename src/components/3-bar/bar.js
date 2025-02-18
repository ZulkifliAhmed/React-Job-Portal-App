import Sidebar from "../2-sideBar/sideBar";
import Search from "./search";
import { TiArrowSortedDown , TiArrowSortedUp  } from "react-icons/ti";
import "./bar.css";
import { useState } from "react";

const Bar = () => {
  
  const [JobCat, setJobCat] = useState(false);

  return (
    <div className="bar">
      <div className="mobile_sidebar">
        <h4
          onClick={() => {
            setJobCat(!JobCat);
          }}
        >
          انواع الوظائف 
          {JobCat ? (
            <span>
              <TiArrowSortedDown /> <Sidebar />
            </span>
          ) : (
            <span>
              <TiArrowSortedUp />
            </span>
          )} 
        </h4>
      </div>
      <div className="day_filter">
        <label htmlFor="filter">وظائف</label>
        <select id="filter">
          <option>اليوم</option>
          <option>هذا الاسبوع</option>
          <option>هذا الشهر</option>
        </select>
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default Bar;
