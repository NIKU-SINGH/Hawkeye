import React from "react";
import { useState } from "react";
import Modal from "../Modal/info";

function Index() {
  const [openHeight, setOpenHeight] = useState(false);
  const [openHash, setOpenHash] = useState(false);
  const [openFromPeer, setOpenFromPeer] = useState(false);
  const [openGetPeer, setOpenGetPeer] = useState(false);
  const [openGetTips, setOpenGetTips] = useState(false);

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
              <div className="px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenHeight(!openHeight)}
                  key={1}
                >
                  By Height
                </label>
                {/* Modal */}
                {openHeight ? (
                  <Modal
                    title={"Get Block By Height"}
                    feild="Height"
                    placeholder="Enter Block Height"
                    key={1}
                  />
                ) : (
                  ""
                )}
              </div>

              {/* Input 2 */}
              <div className=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenHash(!openHash)}
                  key={2}
                >
                  By Hash
                </label>
                {/* Modal */}
                {openHash ? (
                  <Modal
                    title={"Get Block By hash"}
                    feild="Hash"
                    placeholder="Enter Block hash"
                    key={2}
                  />
                ) : (
                  ""
                )}
              </div>

              {/* Input 3 */}
              <div className=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenFromPeer(!openFromPeer)}
                  key={3}
                >
                  From Peer
                </label>
                {/* Modal */}
                {openFromPeer ? (
                  <Modal
                    title={"Get Block From Peer"}
                    feild="Peer"
                    placeholder="Get Block From Peer"
                    key={3}
                  />
                ) : (
                  ""
                )}
              </div>
              {/* Input 4 */}
              <div class=" px-3 mb-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 cursor-pointer  text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                  onClick={() => setOpenGetPeer(!openGetPeer)}
                  key={4}
                >
                  Get Peers
                </label>
                {/* Modal */}
                {openGetPeer ? (
                  <Modal
                    title={"Get Peers"}
                    feild="Peers"
                    placeholder="Get Peers"
                    key={4}
                  />
                ) : (
                  ""
                )}
              </div>
              {/* Input 5 */}
              <div
                onClick={() => setOpenGetTips(!openGetTips)}
                class="px-3 mb-2 flex items-center justify-center"
              >
                <label
                  className="bg-orange-400 py-2 cursor-pointer text-center w-48 rounded tracking-wide text-white text-base font-normal"
                  htmlFor="Enter the Node Name"
                  key={5}
                >
                  Get Tips
                </label>
                {/* Modal */}
                {openGetTips ? (
                  <Modal
                    title={"Get Tips"}
                    feild="Tips"
                    placeholder="Get Tips"
                    key={5}
                  />
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
