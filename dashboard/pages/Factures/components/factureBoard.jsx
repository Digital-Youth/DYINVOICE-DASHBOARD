import { useState } from "react";
export default function FacturesBoard() {

  const [prix, setPrix] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const total = prix * quantity;
  return (

    <div className="mt-8 px-4 pb-5 pt-5 sm:px-6 sm:pt-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 ">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-blue-600 w-40 sm:w-auto"
            >
              Designation
            </th>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-blue-600 w-40 sm:w-auto"
            >
              Prix
            </th>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-blue-600 w-40 sm:w-auto"
            >
              Quantité
            </th>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-blue-600 w-40 sm:w-auto"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black ">
          <tr className="">
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="client-name"
                  id="client-name"
                  autoComplete="given-name"
                  placeholder="Description du produit"
                  className="block w-40 border-none appearance-none py-1.5 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </td>

            <td className="whitespace-nowrap py-4 pl-4 pr-2 text-sm font-medium text-gray-900 sm:pl-3">
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="prix"
                  id="prix"
                  placeholder="Entrer le prix"
                  value={prix}
                  onChange={event => setPrix(Number(event.target.value))}
                  className="block w-40 border-none appearance-none py-1.5 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                />
                
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  autoComplete="given-name"
                  placeholder="Entrer la quantité"
                  value={quantity}
                  onChange={event => setQuantity(Number(event.target.value))}
                  className="block w-40 border-none appearance-none py-1.5 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </td>
            <td className="whitespace-nowrap font-extrabold px-3 py-4 text-sm text-blue-500">
              {total} €
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
