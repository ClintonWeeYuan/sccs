import {FC} from "react";

const Contact : FC = () => {
  return (
    <div className="flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl mb-5">Contact Us</h1>
      <div className="mb-6 w-full md:w-1/3 ">
        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-gray-900 text-green-700 dark:text-green-500">Your
          name</label>
        <input type="text" id="username-success"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Sharon Lee"/>
      </div>
      <div className="mb-6 w-full md:w-1/3">
        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
          Email</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input type="text" id="email-address-icon"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="name@flowbite.com"/>
        </div>
      </div>
      {/*<div>*/}
      {/*  <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your*/}
      {/*    name</label>*/}
      {/*  <input type="text" id="username-error"*/}
      {/*         className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"*/}
      {/*         placeholder="Bonnie Green"/>*/}
      {/*    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username*/}
      {/*      already taken!</p>*/}
      {/*</div>*/}
      <div className="mb-6 w-full md:w-1/3">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
          message</label>
        <textarea id="message" rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."></textarea>

      </div>
      <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
      </button>
    </div>
  )
}

export default Contact;