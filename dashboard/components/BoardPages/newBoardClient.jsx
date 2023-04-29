import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  EyeIcon,
  UserIcon
} from "@heroicons/react/20/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
const client = [
  {
    clientID: "1",
    nom: "Jules Junior",
    mail: "test",
    phone: "21julesjunior@gmail.com",
    action: "test"
  },
  {
    clientID: "2",
    nom: "Jules Junior",
    mail: "test",
    phone: "21julesjunior@gmail.com",
    action: "test"
  },
  {
    clientID: "3",
    nom: "Jules Junior",
    mail: "test",
    phone: "21julesjunior@gmail.com",
    action: "test"
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewBoardClient() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8  xl:gap-x-8">
      <li className="overflow-hidden rounded-xl border border-gray-200">
        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
          <UserIcon className="h-10 w-10 p-15 flex-none rounded-lg bg-white  ring-2 ring-gray-900/10" />
          <div className="text-sm font-bold leading-6 text-gray-900">
            Clients
          </div>
          <Menu as="div" className="relative ml-auto">
            <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <Menu.Item>
                  {({ active }) =>
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900"
                      )}
                    >
                      <span className="text-green-500">+ </span>Add<span className="sr-only">, {client.name}</span>
                    </a>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) =>
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900"
                      )}
                    >
                      Edit<span className="sr-only">, {client.name}</span>
                    </a>}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
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
                          <Menu as="div" className="relative ml-auto">
                            <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Open options</span>
                              <EllipsisHorizontalIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) =>
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-50" : "",
                                        " px-3 py-1 text-sm leading-6 text-gray-900 flex items-center"
                                      )}
                                    >
                                      <EyeIcon className="w-3 h-3 mr-1" />
                                      <span className="font-bold"> View</span>
                                    </a>}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) =>
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-50" : "",
                                        " px-3 py-1 text-sm leading-6 text-gray-900 flex items-center"
                                      )}
                                    >
                                      <PencilIcon
                                        className="w-3 h-3 mr-1"
                                        fill="currentColor"
                                      />
                                      <span className="font-bold">Edit</span>
                                      <span className="sr-only">
                                        , {client.name}
                                      </span>
                                    </a>}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) =>
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-50" : "",
                                        "px-3 py-1 text-sm leading-6 text-gray-900 flex items-center"
                                      )}
                                    >
                                      <TrashIcon className="w-3 h-3 mr-1" />
                                      <span className="text-red-500 font-bold">
                                        Delete
                                      </span>{" "}
                                      <span className="sr-only">
                                        , {client.name}
                                      </span>
                                    </a>}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
