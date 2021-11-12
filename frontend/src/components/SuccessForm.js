import "./successForm.css";
import { Link } from "react-router-dom";

const SuccessForm = () => {
  return (
    <div className="successform">
      <h3 className="successform__title">ชำระเงินสำเร็จ</h3>
      <p>
        เราจะส่งหมายเลขพัสดุให้ทางอีเมล <br />
        เมื่อได้รับการตรวจสอบยอดชำระเงินเรียบร้อยแล้ว<br/><br/>
      </p>
      <Link to="/">กลับหน้าแรก</Link>
    </div>
  );
};

export default SuccessForm;
