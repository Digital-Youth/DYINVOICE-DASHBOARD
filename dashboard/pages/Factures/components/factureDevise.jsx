
import React, { useState,useEffect } from "react";
import money from "money";


export default function FactureDevise() {
  const [currency, setCurrency] = useState("");

  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }


function getCurrencySymbol(currency) {
  switch (currency) {
    case "USD":
      return "$";
    case "Euro":
      return "€";
    case "Franc CFA":
      return "CFA";
    default:
      return "";
  }
}


  return (
    <>
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Devise
        </label>
        <hr />
        <select
          id="currency"
          name="currency"
          className="mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="">Choisissez une devise</option>
          <option value="USD">USD(United State Dollar)</option>
          <option value="EUR">Euro</option>
          <option value="XOF">Franc CFA</option>
        </select>
      </div>
    </>
  );
}
