import "./RegisterPage.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import base_url from "../config/base_url";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  let history = useHistory();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    tel: yup.string().required(),
    city: yup.string().required(),
    postalCode: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerHandler = (data) => {
    axios
      .post(`${base_url}/register`, data)
      .then(( res) => {
        if(res){
          alert("สมัครสมาชิกสำเร็จ");
          console.log(res.data);
           // history.push("/login");
        }
      
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="registerpage">
      <h3 className="registerpage__title">สมัครสมาชิก</h3>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="registerpage__form"
      >
        <div className="registerpage__input">
          <input
            {...register("firstName")}
            className={errors.firstName && "registerpage__inputerror"}
            type="text"
            placeholder="ชื่อ"
          />
          <input
            {...register("lastName")}
            className={errors.lastName && "registerpage__inputerror"}
            type="text"
            placeholder="นามสกุล"
          />
          <input
            {...register("email")}
            className={errors.email && "registerpage__inputerror"}
            type="text"
            placeholder="อีเมล"
          />
          <input
            {...register("password")}
            className={errors.password && "registerpage__inputerror"}
            type="password"
            placeholder="รหัสผ่าน"
            autoComplete="off"
          />
          <input
            {...register("tel")}
            className={errors.tel && "registerpage__inputerror"}
            type="text"
            placeholder="เบอร์โทร"
          />
          <input
            {...register("address")}
            className={errors.address && "registerpage__inputerror"}
            type="text"
            placeholder="ที่อยู่"
          />
          <input
            {...register("city")}
            className={errors.city && "registerpage__inputerror"}
            type="text"
            placeholder="จังหวัด"
          />
          <input
            {...register("postalCode")}
            className={errors.postalCode && "registerpage__inputerror"}
            type="number"
            placeholder="รหัสไปรษณีย์"
          />
        </div>
        <button type="submit">สมัครสมาชิก</button>
      </form>
    </div>
  );
};

export default RegisterPage;
