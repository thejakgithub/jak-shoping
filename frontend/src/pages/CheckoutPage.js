import { useState } from "react";
import "./CheckoutPage.css";

//Components
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import SuccessForm from "../components/SuccessForm";

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(localStorage.getItem("memberName") ? 2 : 1);
  const [paymentAddress,setPaymentAddress] = useState({
    firstName:'',
    lastName:'',
    address:'',
    email:'',
    city:'',
    postalCode:''
  });

  const Form = () => 
     activeStep === 1 && <AddressForm setActiveStep={setActiveStep} setPaymentAddress={setPaymentAddress} />;
     activeStep === 2 && <PaymentForm paymentAddress={paymentAddress} />;
     activeStep === 3 && <SuccessForm />;
  

  return (
    <div className="checkoutpage">
        <ul className="progressBar">
          <li className={activeStep >= 1 && "active"}>ที่อยู่การจัดส่ง</li>
          <li className={activeStep >= 2 && "active"}>การชำระเงิน</li>
          <li className={activeStep >= 3 && "active"}>ชำระเงินสำเร็จ</li>
        </ul>
    
      <Form />
    </div>
  );
};

export default CheckoutPage;
