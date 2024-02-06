import { FormEvent, useRef, useState } from "react";
import axios from "../../../lib/axios";
const useLogin = () => {
  const username = useRef<HTMLInputElement>(null); //พวก input element ใน feature ที่จะส่งไปหลังบ้าน
  const password = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post("/login", {
        username: username.current?.value,
        password: password.current?.value,
      })
      .catch((error) => {
        console.error(error);
        setErr(error.response.data);
      });
  };
  return { username, password,err,handleLogin };
};
export default useLogin
