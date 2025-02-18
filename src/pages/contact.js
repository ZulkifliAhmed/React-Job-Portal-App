 
const Contact = () => {
  return (
    <div className="contact pages">
      <div className="container">
      <h4>تواصل معنا</h4>
      <p>لنشر وظائف علي الموقع او للاستسفارات</p>
      <form>
        <input type="email" placeholder="ادخل ايميلك"/>
        <textarea placeholder="اكتب رسالتك"></textarea>
        <button>ارسال</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
