import { useState } from "react";
import { useRouter } from "next/router";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleRequest = () => {
    const axios = Axios.create({
      baseURL: "http://dispatch.team1ems.com/api/v1/admin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return axios;
  };

  const login = async (e) => {
    router.push("/requests")


   /*  e.preventDefault();
    const axio = handleRequest();
    axio
      .post("/auth/login", { email: email, password: password })
      .then((res) => {
        console.log("token :", res.data.data.token);
        localStorage.setItem("userToken", res.data.data.token);
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      }); */
  };

  return (
    <form className="mt-[74px]">
      <div className="mb-[33px] flex items-end flex-col ">
        <label
          className="text-[#414749] mb-[16px] text-right font-['Montserrat'] text-[20px] leading-[24px] font-normal"
          htmlFor="email"
        >
          البريد الالكتروني
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="text"
          className="bg-[#EFEFEF] pl-4 h-[50px] rounded-[5px] w-[90%] float-right"
        />
      </div>
      <div className="flex items-end mb-[33px] flex-col">
        <label
          className="text-[#414749] text-right font-['Montserrat'] mb-[16px] text-[20px] leading-[24px] font-normal"
          htmlFor="password"
        >
          كلمة السر
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
          className="bg-[#EFEFEF] pl-4 h-[50px] rounded-[5px] w-[90%]"
        />
      </div>
      <button
        onClick={login}
        className="rounded-[5px] text-white float-right bg-[#4874FF] w-[229px] h-[62px]"
      >
        تسجيل الدخول
      </button>
    </form>
  );
};

export default LoginForm;
