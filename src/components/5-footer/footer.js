import Logo from "../1-header/logo";
import Navbar from "../1-header/navbar";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box"><Logo />
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،</p>
        </div>
        <div className="box">
          <Navbar />
           </div>
        <div className="box">
          <h5>ملاحظة</h5>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. </p>
        </div>
      </div>
      <p className="copy_right">جميع الحقوق {new Date().getFullYear()} </p>
    </div>
  );
};

export default Footer;
