import "./AddressForm.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddressForm = ({ setActiveStep,setPaymentAddress }) => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required().email(),
    city: yup.string().required(),
    postalCode: yup.string().required(),
    tel: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const nextHandler = (data) => {
    setPaymentAddress(data);
    setActiveStep(2);
  };

  return (
    <div className="addressform">
      <h3 className="addressform__title">ที่อยู่การจัดส่ง</h3>
      <form onSubmit={handleSubmit(nextHandler)}>
        <div className="addressform__input login-box">
          <div
            className={
              errors.firstName ? "user-box user-box-error" : "user-box"
            }
          >
            <input {...register("firstName")} type="text" placeholder="ชื่อ" />

            <label>ชื่อ{errors.firstName && "*"}</label>
          </div>
          <div
            className={
              errors.lastName ? "user-box user-box-error " : "user-box"
            }
          >
            <input
              {...register("lastName")}
              type="text"
              placeholder="นามสกุล"
            />
            <label>นามสกุล{errors.lastName && "*"}</label>
          </div>
          <div
            className={errors.address ? "user-box user-box-error " : "user-box"}
          >
            <input {...register("address")} type="text" placeholder="ที่อยู่" />
            <label>ที่อยู่{errors.address && "*"}</label>
          </div>
          <div
            className={errors.email ? "user-box user-box-error " : "user-box"}
          >
            <input {...register("email")} type="text" placeholder="อีเมล" />
            <label>อีเมล{errors.email && "*"}</label>
          </div>
          <div
            className={errors.city ? "user-box user-box-error " : "user-box"}
          >
            <input {...register("city")} type="text" placeholder="จังหวัด" />
            <label>จังหวัด{errors.city && "*"}</label>
          </div>
          <div
            className={
              errors.postalCode ? "user-box user-box-error " : "user-box"
            }
          >
            <input
              {...register("postalCode")}
              type="number"
              placeholder="รหัสไปรษณีย์"
            />
            <label>รหัสไปรษณีย์{errors.postalCode && "*"}</label>
          </div>
          <div
            className={
              errors.postalCode ? "user-box user-box-error " : "user-box"
            }
          >
            <input
              {...register("tel")}
              type="number"
              placeholder="เบอร์โทร"
            />
            <label>เบอร์โทร{errors.tel && "*"}</label>
          </div>
        </div>
        <div className="addressform__btn">
          <Link to="/cart">
            <button type="button" className="addressform__back">
              BACK TO CART
            </button>
          </Link>
          <button type="submit" className="addressform__next">
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
