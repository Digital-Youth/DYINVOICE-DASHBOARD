  import { Fragment, useState } from "react";
  import { Menu, Transition } from "@headlessui/react";
  import {
    EllipsisHorizontalIcon,
    EyeIcon,
    UserIcon
  } from "@heroicons/react/20/solid";
  import SlideOver from "../modals/SlideOver";
  import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
  import DeleteAlert from "../modals/DeleteAlert";
  const client = [
    {
      clientID: "1",
      nom: "Jules Junior",
      mail: "test",
      phone: "21julesjunior@gmail.com",
      action: "test"
    }
  ];

  export default function NewBoardClient() {
    const [openSlideOver, setOpenSlideOver] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    
    const handleEditClose = () => {
      setOpenSlideOver(false);
    };

    const handleDeleteAlertClose = () => {
      setOpenDeleteAlert(false);
    };

    


    return (
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8  xl:gap-x-8">
        <li className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <UserIcon className="h-10 w-10 p-15 flex-none rounded-lg bg-white  ring-2 ring-gray-900/10" />
            <div className="text-sm font-bold leading-6 text-gray-900">
              Clients
            </div>
          </div>
          <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="mt-3 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                        >
                          Client ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Nom du client
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Adresse Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Téléphone
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {client.map((client, clientIdx) =>
                        <tr
                          key={client.phone}
                          className={
                            clientIdx % 2 === 0 ? undefined : "bg-gray-50"
                          }
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {client.clientID}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {client.nom}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {client.mail}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {client.phone}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {client.action}
                          </td>
                          <td>
                            <button
                              onClick={() => setOpenSlideOver(true)}
                              className="ml-3 inline-flex items-center  rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            >
                              View
                            </button>

                            <button
                              onClick={() => setOpenDeleteAlert(true)}
                              className="ml-3 inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {openSlideOver && <SlideOver onClose={handleEditClose} />}
                  
                  {openDeleteAlert && <DeleteAlert onClose={handleDeleteAlertClose} />}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
