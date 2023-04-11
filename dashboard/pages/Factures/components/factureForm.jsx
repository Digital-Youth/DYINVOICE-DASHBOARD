
import CardHeader from "./cardHeader";
import ClientInformations from "./clientInformation";
import FacturesBoard from "./factureBoard";

export default function FactureForm() {
  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          {/* Header Facture */}
          <div className="py-3 m-3  sm:flex sm:items-center">
            <div className="text-4xl font-extrabold px-3 sm:flex-auto">
              <p>Digital Youth Service</p>
            </div>
            <div className="font-thin text-end font-serif text-sm sm:ml-16 sm:mt-0 sm:flex-none">
              {/* Les données ci-dessous doivent être dynamiques */}
              <p className=" text-gray-500 ">16 Rue Georges Sand</p>
              <p className=" text-gray-500 ">69100, Villeurbanne</p>
              <p className=" text-gray-500 ">France</p>
            </div>
          </div>
          {/* Card */}
          <div>
            <CardHeader />
          </div>
          {/* Display Client Information */}
          <div>
            <ClientInformations />
          </div>
          <hr className="my-8 mx-4 border-2 rounded-lg border-blue-600" />
          {/* Display the board */}
          <div>
            <FacturesBoard />
          </div>

          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
        <div className="bg-white shadow-sm ring-1  ring-gray-900/5 sm:rounded-xl "></div>

        {/* <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p> */}
      </div>
    </div>
  );
}
