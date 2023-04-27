import { string } from "prop-types";
import React from "react";

function Table({ blockData }) {
  console.log(blockData);
  return (
    <div>
      <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen ">
        <div class="h-full font-Poppins ">
          <div class="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold  text-gray-800">Blockchain Info</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-800 bg-gray-200">
                    <tr>
                      <th class="p-2 whitespace-nowrap bg-orange-400">
                        <div class="font-semibold text-left ">Parameter</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Results</div>
                      </th>
                      <th class="p-2 whitespace-nowrap bg-orange-400">
                        <div class="font-semibold text-left">Parameter</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Results</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="text-sm divide-y divide-gray-100">
                    <tr>
                      <td class="p-2 whitespace-nowrap bg-orange-300">
                        <div class="flex items-center">
                          <div class="font-medium text-gray-800">Height</div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData ? blockData.height : "Nan"}
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap bg-orange-300">
                        <div class="text-left font-medium">Pow</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData
                            ? Math.log(
                                parseInt(blockData.work, 16)
                              ).toPrecision(4)
                            : "Nan"}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="p-2 whitespace-nowrap bg-orange-300">
                        <div class="flex items-center">
                          <div class="font-medium text-gray-800">Hash</div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData ? blockData.hash : "Nan"}
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap  bg-orange-300">
                        <div class="text-left font-medium">First Seen</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData ? blockData.first_seen_by : "Nan"}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="p-2 whitespace-nowrap bg-orange-300">
                        <div class="flex items-center">
                          <div class="font-medium text-gray-800">
                            Parent Hash
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData ? blockData.parent_hash : "Nan"}
                        </div>
                      </td>

                      <td class="p-2 whitespace-nowrap  bg-orange-300">
                        <div class="text-left font-medium">Txs</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData ? blockData.txids.length : "Nan"}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="p-2 whitespace-nowrap bg-orange-300">
                        <div class="flex items-center">
                          <div class="font-medium text-gray-800">Miner</div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {blockData
                            ? // ? typeof blockData.pool_name == "string"
                              blockData.height < 5000000
                              ? "Nan (Testnet)"
                              : blockData.pool_name
                            : // : "NaN"
                              "Nan"}
                        </div>
                      </td>

                      <td class="p-2 whitespace-nowrap  bg-orange-300">
                        <div class="text-left font-medium">Fees</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
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
