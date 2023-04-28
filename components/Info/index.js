import React from "react";
import { useState } from "react";
import Modal from "../Modal/info";

function Index() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/*New Section  */}
      <div className="flex justify-center space-x-4 p-4">
        <div className=" w-full bg-gray-800 rounded-lg shadow-2xl hover:shadow-cyan-500/50">
          <h1 className="text-xl font-gray-300 font-semibold p-4 ">
            Get Blockchain Info
          </h1>
          <div>
            <div className=" flex flex-wrap ">
              {/* Input 1 */}
              <div class="px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenModal(!openModal)}
                >
                  By Height
                </label>
                {/* Modal */}
                {openModal ? (
                  <Modal title={"Get Block By Height"} feild="Height" key={1}/>
                ) : (
                  ""
                )}
              </div>

              {/* Input 2 */}
              <div class=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-gray-300 text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenModal(!openModal)}
                >
                  By Hash
                </label>
                {/* Modal */}
                {openModal ? (
                  <Modal title={"Get Block By hash"} feild="Hash" key={2}/>
                ) : (
                  ""
                )}
              </div>

              {/* Input 3 */}
              <div class=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenModal(!openModal)}
                >
                  From Peer
                </label>
                {/* Modal */}
                {openModal ? (
                  <Modal title={"Get Block From Peer"} feild="Peer" key={3}/>
                ) : (
                  ""
                )}
              </div>
              {/* Input 4 */}
              <div class=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenModal(!openModal)}
                >
                  Get Peers
                </label>
                {/* Modal */}
                {openModal ? (
                  <Modal title={"Get Peers"} feild="Peers" key={4}/>
                ) : (
                  ""
                )}
              </div>
              {/* Input 5 */}
              <div class=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenModal(!openModal)}
                >
                  Get Tips
                </label>
                {/* Modal */}
                {openModal ? (
                  <Modal title={"Get Tips"} feild="Tips" key={5}/>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
