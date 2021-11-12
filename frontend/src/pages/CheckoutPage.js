import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import DataContext from "../data/DataContext";
//Components
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import SuccessForm from "../components/SuccessForm";

const CheckoutPage = () => {
  const [paymentAddress, setPaymentAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    postalCode: "",
  });

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    localStorage.getItem("cart")
      ? localStorage.getItem("paymentAddress")
        ? setActiveStep(2)
        : setActiveStep(1)
      : setActiveStep(3)
  }, []);

  return (
    <div className="checkoutpage">
      <ul className="progressBar">
        <li
          style={{ cursor: "pointer" }}
          className={activeStep >= 1 ? "active" : ""}
          onClick={
            localStorage.getItem("paymentAddress") ? "" : () => setActiveStep(1)
          }
        >
          ที่อยู่การจัดส่ง
        </li>
        <li className={activeStep >= 2 ? "active" : ""}>การชำระเงิน</li>
        <li className={activeStep >= 3 ? "active" : ""}>ชำระเงินสำเร็จ</li>
      </ul>
      <DataContext.Provider
        value={{
          paymentAddress: paymentAddress,
          setPaymentAddress: setPaymentAddress,
          setActiveStep: setActiveStep,
        }}
      >
        {activeStep === 1 && <AddressForm />}
        {activeStep === 2 && <PaymentForm />}
        {activeStep === 3 && <SuccessForm />}
      </DataContext.Provider>
    </div>
  );
};

export default CheckoutPage;
