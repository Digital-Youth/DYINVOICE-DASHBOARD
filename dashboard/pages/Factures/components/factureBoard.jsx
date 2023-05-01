import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

export default function FacturesBoard() {
  const [prix, setPrix] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  const addItem = () => {
    const total = prix * quantity;
    setItems([...items, { prix, quantity, total }]);
    setPrix(0);
    setQuantity(0);
  };

  const removeItem = indexToRemove => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const subtotal = items.reduce((acc, item) => acc + item.total, 0);

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
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gary-300 ">
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
              <td className=" flex justify-center">
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="rounded-full mt-5 bg-red-600 p-1 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </td>
            </tr>
          )}
          <tr>
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
              {prix * quantity} €
            </td>

            <td className="flex justify-center">
              <button
                type="button"
                onClick={addItem}
                className="rounded-full mt-5 bg-blue-600 p-1 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Billing */}
      <div className="mt-16">
        <h2 className="sr-only">Billing Summary</h2>

        <div className="bg-gray-100 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
          <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
            <div>
              <dt className="font-medium text-gray-900">Billing address</dt>
              <dd className="mt-3 text-gray-500">
                <span className="block">Floyd Miles</span>
                <span className="block">7363 Cynthia Pass</span>
                <span className="block">Toronto, ON N3Y 4H8</span>
              </dd>
            </div>
            {/* <div>
              <dt className="font-medium text-gray-900">Payment information</dt>
              <dd className="-ml-4 -mt-1 flex flex-wrap">
                <div className="ml-4 mt-4 flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    width={36}
                    height={24}
                    viewBox="0 0 36 24"
                    className="h-6 w-auto"
                  >
                    <rect width={36} height={24} rx={4} fill="#224DBA" />
                    <path
                      d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                      fill="#fff"
                    />
                  </svg>
                  <p className="sr-only">Visa</p>
                </div>
                <div className="ml-4 mt-4">
                  <p className="text-gray-900">Ending with 4242</p>
                  <p className="text-gray-600">Expires 02 / 24</p>
                </div>
              </dd>
            </div> */}
          </dl>

          <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
            <div className="flex items-center justify-between pb-4">
              <dt className="font-bold">Subtotal</dt>
              <dd className="font-medium text-gray-900">
                {subtotal} €
              </dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="text-gray-600">Discount</dt>
              <dd className="font-medium text-gray-900" />
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="text-gray-600">Total Fax</dt>
              <dd className="font-medium text-gray-900" />
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt className="font-medium text-gray-900">Order total</dt>
              <dd className="font-medium text-indigo-600" />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
