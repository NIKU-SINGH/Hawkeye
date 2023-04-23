import React from "react";

function index() {
  return (
    <div>
      {/*New Section  */}
      <div className="flex justify-center space-x-4 mt-20">
        <div className=" w-1/3 bg-gray-200">
          <h1 className="font-semibold text-2xl flex flex-col text-center">
            Get Blochain Info
          </h1>
          <div>
            <div>
              {/* Input 1 */}
              <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                  htmlFor="Enter the Node Name"
                >
                  By Height
                </label>
                
              </div>

              {/* Input 2 */}
              <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                  htmlFor="Enter the Node Name"
                >
                  By Hash
                </label>
                
              </div>

              {/* Input 3 */}
              <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                <label
                  className="bg-orange-400 cursor-pointer py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                  htmlFor="Enter the Node Name"
                >
                  From Peer
                </label>
                
              </div>
              {/* Input 4 */}
              <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                  htmlFor="Enter the Node Name"
                >
                  Get Peers
                </label>
               
              </div>
              {/* Input 5 */}
              <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                <label
                  className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                  htmlFor="Enter the Node Name"
                >
                  Get Tips
                </label>
               
              </div>
            </div>
          </div>
        </div>


        {/*New Section  */}
        <div className="w-1/3 bg-gray-200 p-4 rounded-lg">
          <h1 className="font-semibold text-2xl flex flex-col text-center">
            Blochain Info
          </h1>

          <div>
            <h1 className="text-lg font-medium">Check Transaction Status</h1>
            <div class="w-full mb-6 md:mb-0 flex items-center">
              <label
                className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                htmlFor="Enter the Node Name"
              >
                Check
              </label>
             
            </div>
          </div>

          <div>
            <h1 className="text-lg font-medium">Update Address List</h1>
            <div class="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
             
            </div>
            <div className="flex-col flex w-full justify-evenly">
              <label
                className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                htmlFor="Enter the Node Name"
              >
                Add 
              </label>
              <label
                className="bg-orange-400 py-2 text-center w-48 rounded tracking-wide text-black text-base font-normal mb-2"
                htmlFor="Enter the Node Name"
              >
                Remove
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
