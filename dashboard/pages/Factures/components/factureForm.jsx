import { useState } from "react";
import CardHeader from "./cardHeader";
import ClientInformations from "./clientInformation";
import FacturesBoard from "./factureBoard";
import ClientInfo from "./ClientInfo";

export default function FactureForm() {
  return (
    <div className=" space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="bg-white shadow-xl  shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          {/* Header Facture */}
          <div className="py-3 m-3  sm:flex sm:items-center">
            <div className="text-4xl font-extrabold px-3 sm:flex-auto">
              <p>Digital Youth Service</p>
            </div>
            <div className="text-end text-sm sm:ml-16 sm:mt-0 sm:flex-none">
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
        </div>

        <div className="flex flex-col items-center">

        <div className="mb-6 w-full">
            <ClientInfo/>
          </div>


          <button
            type="submit"
            className="rounded-md bg-blue-600 w-full px-3 py-2 text-sm font-semibold text-white shadow-xl drop-shadow-xl hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer la facture
          </button>

          <div className="py-8 flex-col space-x-4 col grid-cols-2 justify-center">
            <button
              type="submit"
              className="rounded-md w-56 bg-white shadow-xl px-6 py-2 text-lg text-slate-950 hover:bg-black hover:text-white font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Visualiser
            </button>
            <button
              type="submit"
              className="rounded-md w-56 bg-white shadow-xl px-6 py-2 text-lg text-slate-950 hover:bg-black hover:text-white font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
