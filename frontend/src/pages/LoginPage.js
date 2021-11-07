import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import base_url from "../config/base_url";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  let history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [errorSubmit, setErrorSubmit] = useState(false);

  const loginHandler = (data) => {

    axios
      .post(`${base_url}/login`, data)
      .then((res) => {
        if (res) {
          console.log(res);
          localStorage.setItem("token",  res.data.token);
          localStorage.setItem("memberName", res.data.firstName);
        //  window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorSubmit(true);
      });
  };

  return (
    <div className="loginpage">
      <img
        className="loginpage__img"
        src="https://www.brandbuffet.in.th/wp-content/uploads/2021/06/Online-Shopping_3.png"
        alt="login shop"
      />
      <form onSubmit={handleSubmit(loginHandler)} className="loginpage__form">
        <h3>เข้าสู่ระบบสมาชิก</h3>
        {errorSubmit && (
          <div className="alert">อีเมลหรือรหัสผ่านไม่ถูกต้อง</div>
        )}
        <input
          {...register("email")}
          type="text"
          placeholder="อีเมล"
          className={errors.email && "loginpage__error"}
        />
        <input
          {...register("password")}
          type="password"
          autoComplete="off"
          placeholder="รหัสผ่าน"
          className={errors.password && "loginpage__error"}
        />
        <button type="submit">เข้าสู่ระบบ</button>
        <Link to="/forgotpassword">ลืมรหัสผ่านใช่หรือไม่</Link>
        <hr />
        <Link to="/register">
          <button type="button">สมัครสมาชิก</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
