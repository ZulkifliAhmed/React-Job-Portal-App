import { BiLogoGmail } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";

function Post() {
  return (
    <div className='post'>
      <div className="box">
          <div className="job_titel">
            <h3>
              <span>
                <MdOutlineWorkOutline />
              </span>
              مصمم جرافيك وصانع محتوى            </h3>
            <div className="add_time">
              <span>
                
                <IoMdTime />
                منذ 5 ساعة
              </span>
            </div>
          </div>
          <p className="job_description">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
          <div className="job_contact">
           <span>تقديم عن طريق</span>
            <div>

             <a href="/">الواتساب  <RiWhatsappFill className="whatsapp"/></a>
            </div>
            <div>
              <a href="/">الايميل <BiLogoGmail className="gmail" /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Post;
