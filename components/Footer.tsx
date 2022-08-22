import { FC } from "react";
import Image from "next/image";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer: FC = () => {
  return (
    <div className="bg-primary text-white flex flex-col lg:flex-row justify-center px-4 py-10 lg:px-10 w-full">
      <div className="px-10 flex justify-center lg:block mb-4 ">
        <Image src="/sccs-logo.png" alt="logo" width={120} height={120} />
      </div>
      <div>
        <div className="mb-4">
          <h1 className="text-lg lg:text-4xl">
            SARAWAK CHILDREN&apos;S CANCER SOCIETY
          </h1>
          <p className="text-xs">Registration No: PPM-001-13-26112001</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold mb-2">KUCHING OFFICE</h3>
            <p className="text-xs">
              Lot 5493, Lorong 15,Taman Desa Wira <br />
              Jalan Batu Kawa
              <br />
              93250 Kuching, Sarawak
              <br />
              Tel: +6082-686276 <br />
              Fax: +6082-686376 <br />
              Email:administrator@sccs.org.my
              <br />
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <h3 className="text-md font-semibold mb-2">MIRI OFFICE</h3>
            <p className="text-xs">
              Lot 1585, Taman Lopang Jaya <br />
              98000, Miri
              <br />
              Email: nr@sccs.org.my
              <br />
              Operating hours: <br />
              8.00am-5:00pm (Monday- Friday) <br />
              8.00-12.00pm (Saturday)
              <br />
            </p>
          </div>
          <div className="hidden sm:flex flex-col">
            <h3 className="text-md font-semibold mb-2">FOLLOW US ON</h3>
            <div className="flex justify-around items-center">
              <BsFacebook />
              <BsInstagram />
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="flex sm:hidden flex-col items-center">
          <h3 className="text-md font-semibold mb-2">FOLLOW US ON</h3>
          <div className="flex justify-around items-center w-1/2    ">
            <BsFacebook />
            <BsInstagram />
            <BsYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
