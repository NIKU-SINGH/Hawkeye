import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {/* Start */}

      <button
        className="bg-[#f2a900] text-white active:bg-pink-600 font-normal uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-normal">Add Node</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}

                <form>
                  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    {/* First form */}
                    <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <label
                        className="  w-48 tracking-wide text-black text-base font-normal mb-2"
                        htmlFor="Enter the Node Name"
                      >
                        Name
                      </label>
                      <input
                        class="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Enter the Node Name"
                      />
                    </div>
                    {/* Second Form */}
                    <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <label
                        className="  w-48 tracking-wide text-black text-base font-normal mb-2"
                        htmlFor="Enter the Node Name"
                      >
                        RPC host
                      </label>
                      <input
                        className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Enter the RPC host"
                      />
                    </div>
                    {/* Second Form */}
                    <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <label
                        className=" w-48  tracking-wide text-black text-base font-normal mb-2"
                        htmlFor="Enter the Node Name"
                      >
                        RPC Port
                      </label>
                      <input
                        className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Enter the RPC Port"
                      />
                    </div>
                    
                    {/* Second Form */}
                    <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <label
                        className="  w-48 tracking-wide text-black text-base font-normal mb-2"
                        htmlFor="Enter the Node Name"
                      >
                        Mirror RPC Port
                      </label>
                      <input
                        className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Enter the Mirror RPC Port"
                      />
                    </div>
                    <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <label
                        className="  w-48 tracking-wide text-black text-base font-normal mb-2"
                        htmlFor="Enter the Node Name"
                      >
                        Username
                      </label>
                      <input
                        class="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Enter the Username"
                      />
                    </div>
                    <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                      <label
                        className=" w-48 tracking-wide text-black text-base font-normal mb-2"
                        htmlFor="Enter the Node Name"
                      >
                        Password
                      </label>
                      <input
                        className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Enter the Password"
                      />
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#f2a900] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* End */}
    </>
  );
}
