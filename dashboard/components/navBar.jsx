import { useState, useEffect } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(""); // Ajout d'un state pour stocker la page active

  useEffect(() => {
    const path = window.location.pathname; // Récupère le chemin actuel de la page
    setActivePage(path); // Met à jour l'état de la page active
  }, []); // Exécuté seulement une fois au montage du composant

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/Acceuil"
            className={`text-sm font-semibold leading-6 ${activePage ===
            "/Acceuil"
              ? "text-blue-500"
              : "text-gray-900"} hover:text-blue-500`}
          >
            Acceuil
          </a>
          <a
            href="/Clients"
            className={`text-sm font-semibold leading-6 ${activePage ===
            "/Clients"
              ? "text-blue-500"
              : "text-gray-900"} hover:text-blue-500`}
          >
            Clients
          </a>
          <a
            href="/Factures"
            className={`text-sm font-semibold leading-6 ${activePage ===
            "/Factures"
              ? "text-blue-500"
              : "text-gray-900"} hover:text-blue-500`}
          >
            Factures
          </a>
          <a
            href="/Paramèt"
            className={`text-sm font-semibold leading-6 ${activePage ===
            "/Paramèt"
              ? "text-blue-500"
              : "text-gray-900"} hover:text-blue-500`}
          >
            Paramètres
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="rounded-lg bg-gray-100 px-2 py-1 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-900 hover:text-blue-400"
          >
            log in
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
