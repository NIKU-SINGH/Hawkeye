import React from "react";

function index() {
  return (
    <div>
      {/*New Section  */}
      <div className="flex justify-center space-x-4 p-4">
        <div className=" w-full bg-gray-800 rounded-lg">
          <div>
            <div className=" flex flex-wrap justify-between ">
              {/* Input 1 */}
              <div class="px-3 m-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                >
                  By Height
                </label>  
              </div>

              {/* Input 2 */}
              <div class=" px-3 m-2  flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-gray-300 text-base font-normal "
                  htmlFor="Enter the Node Name"
                >
                  By Hash
                </label>
                
              </div>

              {/* Input 3 */}
              <div class=" px-3 m-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                >
                  From Peer
                </label>
                
              </div>
              {/* Input 4 */}
              <div class=" px-3 m-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                >
                  Get Peers
                </label>
               
              </div>
              {/* Input 5 */}
              <div class=" px-3 m-2 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-white text-base font-normal "
                  htmlFor="Enter the Node Name"
                >
                  Get Tips
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
