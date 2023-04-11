import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function ClientInformations() {
      const [selectedDate, setSelectedDate] = useState(null);

      const handleChange = (date) => {
        setSelectedDate(date);
      };
  return (
    <div className="mt-8 px-4 pb-5 pt-5 sm:px-6 sm:pt-6 overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-gray-500 w-40 sm:w-auto"
            >
              Facturé à
            </th>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-gray-500 w-40 sm:w-auto"
            >
              Date de la facture
            </th>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-light text-gray-500 w-40 sm:w-auto"
            >
              Num. Facture
            </th>
            <th
              scope="col"
              className="py-3.5 px-3  text-left text-sm font-semibold text-gray-900 w-40 sm:w-auto"
            >
              Montant à payer
            </th>
          </tr>
        </thead>
        <tbody className="rounded-lg ">
          <tr>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  id="location"
                  name="location"
                  className="block w-40 border-none appearance-none py-1.5 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                  defaultValue="Choisissez le nom du client"
                >
                  <option>Lemela Mike</option>
                  <option>Terence Hill</option>
                  <option>Lemoupa Ben</option>
                </select>
              </div>
            </td>

            <td className="whitespace-nowrap py-4 pl-4 pr-2 text-sm font-medium text-gray-900 sm:pl-3">
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Choisir une date"
                  className="block w-40 border-none appearance-none py-1.5 px-2 text-gray-900 focus:ring-0 focus:outline-none placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <p>2023-03-21-0002</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
              <p className="text-3xl font-bold ">8000€</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
