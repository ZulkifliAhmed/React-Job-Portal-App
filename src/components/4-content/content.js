import Post from "./post";
import "./content.css";

const Content = () => {
  return (
    <div className="Content">
      <div className="job_box">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="job_filter">
        <div className="filter">
          <label htmlFor="job_filter">عرض من</label>
          <select id="job_filter">
            <option>الاجدد الي الاقدم</option>
            <option>الاقدم الي الاجدد</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Content;
