import SideBar from "@/components/Navbar/SideBar";
import { Footer } from "flowbite-react";
import React from "react";

function New() {
  return (
    <SideBar>
      <h1 className="text-white text-2xl font-medium mb-3">New Invoice</h1>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 ...">
          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-3 ...">
                <ul>
                  <li />
                  <li>
                    <div className="flex justify-start items-center">
                      <h1 className="text-white text-left">Billing To </h1>
                      <button class="relative inline-flex items-center justify-center p-0.5 ml-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-1 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Existing
                        </span>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div class="relative">
                      <input
                        type="search"
                        id="default-search"
                        class="block mt-2 w-full p-1 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Client Name"
                        required
                      />
                    </div>
                  </li>

                  <li>
                    <div class="relative">
                      <input
                        type="search"
                        id="default-search"
                        class="block mt-2 w-full p-1 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Client Address"
                        required
                      />
                    </div>
                  </li>

                  <li>
                    <div class="relative">
                      <input
                        type="search"
                        id="default-search"
                        class="block mt-2 w-full p-1 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Client Mobile"
                        required
                      />
                    </div>
                  </li>

                  <li>
                    <div class="relative">
                      <input
                        type="search"
                        id="default-search"
                        class="block mt-2 w-full p-1 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Client Email"
                        required
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-end-7 col-span-2 ...">
                <div class="grid gap-4 grid-cols-2">
                  <div>
                    <ul className="">
                      <li>
                        <h1 className="mb-4 text-left text-white">INVOICE #</h1>
                      </li>

                      <li>
                        <h1 className="mb-4 text-left text-white">
                          Creation Date
                        </h1>
                      </li>

                      <li>
                        <h1 className="mb-4 text-left text-white">Due Date</h1>
                      </li>

                      <li>
                        <h1 className="mb-4 text-left text-white">
                          Change Currency
                        </h1>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li />
                    </ul>
                  </div>
                </div>
                ​
              </div>
            </div>
          </div>

          <div class="mt-3 w-full h-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-gray-600 dark:text-white">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-500 border-b border-gray-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-500 border-b border-gray-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-500 border-b border-gray-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-500 border-b border-gray-400">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                    >
                      Google Pixel Phone
                    </th>
                    <td class="px-6 py-4">Gray</td>
                    <td class="px-6 py-4">Phone</td>
                    <td class="px-6 py-4">$799</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-gray-500 border-gray-40">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                    >
                      Apple Watch 5
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4">Wearables</td>
                    <td class="px-6 py-4">$999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="grid gap-x-8 gap-y-4 grid-cols-3">
            <div>
              <button
                type="button"
                class=" mt-3 focus:outline-none text-white w-full bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-gray-900"
              >
                gray
              </button>
            </div>
            <div>
              <button
                type="button"
                class="focus:outline-none mt-3 text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Red
              </button>
            </div>
            <div>
              {" "}<button
                type="button"
                class="focus:outline-none mt-3 text-white w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
              >
                Red
              </button>
            </div>
          </div>
        </div>

        <div class="...">
          <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Latest Customers
              </h5>
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div class="grid gap-4 grid-cols-2">
              <div>
                <button
                  type="button"
                  class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View Mode
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Settings
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Export PDF
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Download Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
}

export default New;
