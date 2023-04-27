import React from "react";

function index() {
  return (
    <div>
      {/*New Section  */}
      <div className=" bg-gray-800 p-1 rounded-lg flex justify-between m-4 shadow-2xl hover:shadow-cyan-500/50">
        <div className="bg-gray-800 rounded-lg w-full p-1 flex-col">
          <h1 className="text-xl font-semibold p-4 ">
            Update Address List
          </h1>
          <div className="w-full mb-6 md:mb-0 flex items-center  justify-center p-1 rounded bg-gray-600">
            <input
              className=" w-full text-sm text-black border border-gray-500 bg-gray-500 rounded py-2 px-4"
              id="company"
              type="text"   
              placeholder="Enter Address"
            />
            <label
              className="bg-orange-400 text-white m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-base font-normal"
              htmlFor="Enter the Node Name"
            >
              Add
            </label>
            <label
              className="bg-orange-400 m-2 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal"
              htmlFor="Enter the Node Name"
            >
              Remove
            </label>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default index;
