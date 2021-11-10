import "./successForm.css";
import { Link } from "react-router-dom";


const SuccessForm = () => {


  return (
    <div className="successform">
      <h3 className="successform__title">ชำระเงินสำเร็จ</h3>
      <Link to="/">กลับหน้าแรก</Link>
    </div>
  );
};

export default SuccessForm;
