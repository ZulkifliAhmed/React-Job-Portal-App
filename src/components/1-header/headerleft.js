import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";

function Headerleft() {
  return (
    <div className="Header_left">
      <div className="country">
        <label htmlFor="country" className="country-icon">
          <TbWorld />
        </label>
        <select id="country">
          <option>اختر الدولة</option>
          <option>السعودية</option>
          <option>الامارات</option>
          <option>قطر</option>
        </select>
      </div>
      <div className="registration">
        <div><Link to="/register">تسجيل دخول</Link></div>
        <div><Link to="/register">انشاء حساب</Link></div>
      </div>
    </div>
  );
}

export default Headerleft;
