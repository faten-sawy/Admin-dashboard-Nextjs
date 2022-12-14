import Head from 'next/head'
import Image from 'next/image'

import logo from "../assets/images/logo.svg"
import TextLogo from "../assets/images/Group.svg"
import LoginForm from '../src/components/forms/LoginForm'

const Login = () => {
  return (
    <div className="flex w-full md:flex-row flex-col-reverse">
      <div className="flex md:w-[60.4%] w-full">
        <Image
          src={logo}
          alt="logo"
          className="w-[87px] h-[86.69px] md:block hidden relative left-[60px] top-[29px]"
        />
        <div className="md:w-[calc(100%-87px)] w-full md:mt-[101px] mt-[20px] p-[30px]">
          <h2 className="font-['Montserrat'] mb-[17px] text-right text-[#414749] text-[25px] font-semibold leading-[30px]">
            تسجيل الدخول
          </h2>
          <h3 className="text-[#908A81] font-['Montserrat'] text-[16px] leading-[20px] text-right">
            مرحبا بك مجددا ... يرجى تسجيل الدخول
          </h3>
          <LoginForm />
        </div>
      </div>
      <div className=" justify-center items-center flex bg-[#001A6B]/[0.96] w-full md:w-[39.6%]  h-[200px] md:h-screen">
        <Image src={TextLogo} alt="text" className="md:w-3/4 w-1/2" />
      </div>
    </div>
  );
};

export default Login