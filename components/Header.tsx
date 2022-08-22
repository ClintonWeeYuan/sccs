import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className="navbar bg-primary px-2 lg:px-10 text-base-100">
      <div className="navbar-start">
        <div>
          <Image src="/sccs-logo.png" alt="logo" width={100} height={80} />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Our Stories</a>
          </li>
          <li tabIndex={0}>
            <a>
              About Us
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-primary z-30">
              <li>
                <a>History</a>
              </li>
              <li>
                <a>Our Team</a>
              </li>
              <li>
                <a>About Childhood Cancer</a>
              </li>
              <li>
                <a>Annual Report</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              What We Do
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-primary z-30">
              <li>
                <a>Support Services</a>
              </li>
              <li>
                <a>Financial and Medical Aid</a>
              </li>
              <li>
                <a>Accommodation</a>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Recreation</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-accent ">Donate Now</a>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <a>Our Stories</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
