import React from "react";
import { useRouter } from "next/router";
import Remove from '../Modal/Remove'

function Index() {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [showRemoveModal, setShowRemoveModal] = React.useState(false);

  return (
    <div className="mx-1 p-4 md:mx-10 flex items-center justify-between text-gray-800">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="font-extrabold font-Raleway text-2xl md:text-3xl flex-1 cursor-pointer"
      >
        Hawkeye.
      </div>

      <div className="border-2 rounded-full  border-gray-400 flex items-center justify-center px-4">
        <h1 clxassName="mx-2 font-Raleway font-bold text-base">Manage Nodes</h1>
        <div className="flex items-center text-sm  font-normal font-Poppins cursor-pointer p-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-700 p-2 mx-2 rounded-lg w-24 text-white "
          >
            Add
          </button>
        </div>

        <div className="flex items-center text-sm  font-normal font-Poppins cursor-pointer p-2">
          <button
            onClick={() => setShowRemoveModal(true)}
            className="bg-blue-700 p-2 mx-2 rounded-lg w-24 text-white "
          >
            Remove
          </button>
        </div>
      </div>

      <div className="mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 cursor-pointer"
        >
          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
          <path
            fillRule="evenodd"
            d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Modal */}
      { showRemoveModal ? <Remove /> :  null}

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
    </div>
  );
}

export default Index;
