import { useState } from "react";
import { PlusIcon } from '@heroicons/react/20/solid'

export default function FacturesBoard() {
  const [prix, setPrix] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  const total = prix * quantity;

  const addItem = () => {
    setItems([...items, { prix, quantity, total }]);
    setPrix(0);
    setQuantity(0);
  };

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
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-blue-600 w-40 sm:w-auto"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black ">
          {items.map((item, index) =>
            <tr key={index}>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <input
                  type="text"
                  name="client-name"
                  id="client-name"
                  autoComplete="given-name"
                  placeholder="Description du produit"
                  className="block w-40 border-none appearance-none py-1.5 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-2 text-sm font-medium text-gray-900 sm:pl-3">
                {item.prix} €
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {item.quantity}
              </td>
              <td className="whitespace-nowrap font-extrabold px-3 py-4 text-sm text-blue-500">
                {item.total} €
              </td>
              <td className="whitespace-nowrap px-3 py-4" />
            </tr>
          )}
          <tr>
            <td className="whitespace-nowrap px-3 py4 text-sm text-gray-500">
              <input
                type="text"
                name="client-name"
                id="client-name"
                autoComplete="given-name"
                placeholder="Description du produit"
                className="block w-40 border-none appearance-none py-1.5 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-2 text-sm font-medium text-gray-900 sm:pl-3">
              <input
                type="number"
                name="prix"
                id="prix"
                placeholder="Entrer le prix"
                value={prix}
                inputMode="numeric"
                onChange={event => setPrix(Number(event.target.value))}
                className="block w-20 w-max-auto rounded-xl border-2 border-gray-100 py-1.5 bg-gray-50 text-gray-900 focus:ring-0 no-spinner focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6 input-number"
              />
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <input
                type="number"
                name="quantity"
                id="quantity"
                autoComplete="given-name"
                placeholder="Entrer la quantité"
                value={quantity}
                onChange={event => setQuantity(Number(event.target.value))}
                className="block w-20 w-max-auto rounded-xl border-2 border-gray-100 py-1.5 bg-gray-50 text-gray-900 focus:ring-0 no-spinner focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6 input-number"
              />
            </td>
            <td className="whitespace-nowrap font-extrabold px-3 py-4 text-sm text-blue-500">
              {total} €
            </td>
            <td>
              <button
                type="button"
                onClick={addItem}
                className="rounded-full bg-blue-600 p-1 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
