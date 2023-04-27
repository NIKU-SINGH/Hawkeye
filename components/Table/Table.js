import { string } from "prop-types";
import React from "react";

function Table({ blockData }) {
  console.log(blockData);
  return (
    <div>
      <section className="flex flex-col justify-center antialiased  text-gray-900 ">
        <div className="h-full font-Poppins ">
          <div className="w-full max-w-5xl mx-auto bg-gray-800 shadow-2xl rounded-lg hover:shadow-cyan-500/50">
            <header className="px-5 py-4 ">
              {/* <h2 className="font-semibold text-lg text-gray-300">Blockchain Info</h2> */}
            </header>

            {/* Table Start */}
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                {/* Table Header */}
                  <thead className="font-semibold uppercase text-gray-300 bg-gray-900  ">
                    <tr className="">
                      <th className="p-4 whitespace-nowrap hover:bg-gray-700 cursor-pointer">
                        <div className="font-semibold text-base text-left ">Parameter</div>
                      </th>
                      <th className="p-4 whitespace-nowrap hover:bg-gray-700 cursor-pointer">
                        <div className="font-semibold text-left">Results</div>
                      </th>
                      <th className="p-4 whitespace-nowrap hover:bg-gray-700 cursor-pointer">
                        <div className="font-semibold text-left">Parameter</div>
                      </th>
                      <th className="p-4 whitespace-nowrap hover:bg-gray-700 cursor-pointer">
                        <div className="font-semibold text-left">Results</div>
                      </th>
                    </tr>
                  </thead>


                  <tbody className="text-sm text-gray-300  ">
                  {/* 2nd Row */}
                    <tr className=" rounded-lg cursor-pointer">
                      <td className=" p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-300 p-2">Height</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData ? blockData.height : "Nan"}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium p-2">Pow</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData
                            ? Math.log(
                                parseInt(blockData.work, 16)
                              ).toPrecision(4)
                            : "Nan"}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex items-center">
                          <div className="font-medium p-2">Hash</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData ? blockData.hash : "Nan"}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-left font-medium p-2">First Seen</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData ? blockData.first_seen_by : "Nan"}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex items-center">
                          <div className="font-medium p-2">
                            Parent Hash
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData ? blockData.parent_hash : "Nan"}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap  ">
                        <div className="text-left font-medium p-2">Txs</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-left p-2">
                          {blockData ? blockData.txids.length : "Nan"}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex items-center">
                          <div className="font-medium p-2">Miner</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData
                            ? // ? typeof blockData.pool_name == "string"
                              blockData.height < 5000000
                              ? "Nan (Testnet)"
                              : blockData.pool_name
                            : // : "NaN"
                              "Nan"}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap  ">
                        <div className="text-left font-medium p-2">Fees</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left p-2">
                          {blockData ? blockData.total_fee : "Nan"}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Table;
