import { FormEvent, useRef, useState } from "react";
import axios from "../../../lib/axios";

const useSignUp = () => {
  const username = useRef<HTMLInputElement>(null); //พวก input element ใน feature ที่จะส่งไปหลังบ้าน
  const password = useRef<HTMLInputElement>(null);
  const lname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const role = useRef<HTMLSelectElement>(null);
  const fname = useRef<HTMLInputElement>(null);
  const phoneNum = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState("");

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.current?.value !== confirmPassword.current?.value) {
      //มี .current.value เสมอถ้าใช้ useref
      return setErr(
        "Passwords do not match. Please ensure they are identical."
      );
    }
    axios
      .post("/register", {
        username: username.current?.value,
        password: password.current?.value,
        lname: lname.current?.value,
        email: email.current?.value,
        role: role.current?.value,
        fname: fname.current?.value,
        phoneNum: phoneNum.current?.value,
        confirmPassword: confirmPassword.current?.value,
      })
      .catch(error => {
        console.error(error);
        setErr(error.response.data)
      });
  };
  return {
    username,
    password,
    lname,
    email,
    role,
    fname,
    phoneNum,
    confirmPassword,
    handleSignUp,
    err,
  };
};
export default useSignUp;
