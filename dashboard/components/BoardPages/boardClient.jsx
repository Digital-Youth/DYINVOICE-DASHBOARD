import ClientEdit from "@/components/modals/clientEdit";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useState} from "react";

export default function BoardClient() {

  const [open, setOpen] = useState(false);
    const handleEditClose = () => {
      setOpen(false);
    };
  return (
    <div className="overflow-hidden mt-8 rounded-lg border-2 border-gray-200 px-4 pb-5 pt-5 sm:px-6 sm:pt-6">
      <div className="text-xl py-3  sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p>Client</p>
        </div>
        <div className=" sm:ml-16 sm:mt-0 sm:flex-none">
          <a
            href="/Clients/clientForm"
            type="button"
            className=" inline-flex rounded-md bg-white outline outline-offset-2 outline-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-600 hover:text-white cursor-pointer"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Ajouter un Client
          </a>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
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
        <tbody className="rounded-lg ">
          <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
            <td className="whitespace-nowrap py-4 text-sm text-gray-500">
              <a
                href="/Clients/clientDetails"
                className="text-green-500 px-4 font-bold hover:text-green-500"
              >
                View<span className="sr-only"></span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className="text-yellow-400 font-bold hover:text-yellow-400"
              >
                Edit<span className="sr-only"></span>
              </button>
              {open && <ClientEdit onClose={handleEditClose} />}
              <a href="#" className="text-red-500 font-bold px-4">
                Supprimer<span className="sr-only"></span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
