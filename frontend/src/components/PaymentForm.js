import { useContext, useState, useEffect } from "react";
import DataContext from "../data/DataContext";
import "./PaymentForm.css";
import numeral from "numeral";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PaymentForm = () => {
  const { paymentAddress, setActiveStep,setPaymentAddress } = useContext(DataContext);

  useEffect(() => {
    if(paymentAddress.firstName===""){
      setPaymentAddress(JSON.parse(localStorage.getItem("paymentAddress")))
    }
  }, [])

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const [fileImg, setFileImg] = useState(null);
  const [receipt, setReceipt] = useState(null);

  const schema = yup.object().shape({
    fileImg: yup
      .mixed()
      .test("type", "รองรับไฟล์รูปภาพ .png/.jpg/.jpeg เท่านั้น !", (value) => {
        if (!value.length) return true;
        return (
          (value && value[0].type === "image/png") ||
          value[0].type === "image/jpg" ||
          value[0].type === "image/jpeg"
        );
      }),
  });

  const {
    register,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type === "image/jpg" ||
        e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/png"
      ) {
        clearErrors("fileImg");
        setFileImg(URL.createObjectURL(e.target.files[0]));
        setReceipt(e.target.files[0]);
      } else {
        setFileImg(null);
        setReceipt(null);
        setError("fileImg", {
          type: "manual",
          message: "รองรับไฟล์รูปภาพ .jpg/.jpeg/.png เท่านั้น !",
        });
      }
    } else {
      setFileImg(null);
      setReceipt(null);
    }
  };

  const paymentHandler = () => {
    setActiveStep(3);
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <div className="paymentform">
      <h3 className="paymentform__title">ที่อยู่การจัดส่ง</h3>
      <div className="paymentform__input">
        <div>
          ชื่อ {paymentAddress.firstName} {paymentAddress.lastName}
        </div>
        <div>อีเมล {paymentAddress.email}</div>
        <div>ที่อยู่ {paymentAddress.address}</div>
        <div>จังหวัด {paymentAddress.city}</div>
        <div>รหัสไปรษณีย์ {paymentAddress.postalCode}</div>
        <div>เบอร์โทร {paymentAddress.tel}</div>
        <h3 className="paymentform__title">รายการสินค้า</h3>
      </div>
      <div className="paymentform__products">
        <strong>ชื่อสินค้า</strong>
        <strong>จำนวน</strong>
        <strong>ราคา</strong>
        {products.map((product) => (
          <>
            <div key={product._id}>{product.name}</div>
            <div key={product._id}>{product.qty}</div>
            <div key={product._id}>{numeral(product.price).format("$0,0")}</div>
          </>
        ))}
       
      </div>
      <hr className="line"/>
      <div>
          ค่าจัดส่ง ${products.reduce((sum, product) => Number(sum) + Number(product.qty), 0)}
          <br />
          <br />
          รวมสุทธิ{" "}
          {numeral(
            products.reduce((sum, product) => sum + product.qty, 0) +
              products.reduce((sum, product) => sum + product.price, 0)
          ).format("$0,0")}
          
        </div>
        <hr className="line"/>
      <form className="payment" onSubmit={paymentHandler}>
        <h3 className="payment__title">ชำระเงิน</h3>
        <input
          {...register("fileImg")}
          onChange={handleChange}
          accept="image/*"
          id="imgInp"
          type="file"
          required
        />
        <label className="label__file">ใบเสร็จชำระเงิน .jpg/.jpeg/.png</label>

        {errors.fileImg && (
          <div className="alert__file">{errors.fileImg.message}</div>
        )}
        {fileImg ? (
          <div className="img__content">
            <img className="file__img" src={fileImg} alt="fileImg" />
          </div>
        ) : (
          <div></div>
        )}
        {fileImg ? (
          <div className="btn__content">
            <button className="btn__payment" type="submit">
              <h1>ชำระเงิน</h1>
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <p className="p__file">
          *หมายเหตุ สำหรับการชำระเงินซื้อสินค้า ขอให้โอนเงินเข้า <br />
          ชื่อบัญชี สวิตต์ ชัยศรี ธนาคารไทยพาณิชย์ เลขที่บัญชี 324-404952-1
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
