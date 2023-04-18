import React from "react";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const pages = [
  {
    name: "Client",
    href: "/Clients",
    current: false,
    subpages: [
      { name: "Détail Client", href: "/Clients/clientDetails" },
      { name: "Ajouter Client", href: "/Clients/clientForm" },
    ],
  },
  {
    name: "Factures",
    href: "/Factures",
    current: false,
    subpages: [
      { name: "Créer une facture", href: "/Factures/factureCreate" },

    ],
  },
];


export default function Breadcrumb() {
  const [currentPage, setCurrentPage] = useState("");
  const [currentSubpage, setCurrentSubpage] = useState("");

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const page = pages.find((p) => currentPathname.startsWith(p.href));
    if (page) {
      setCurrentPage(page.name);
      const subpage = page.subpages?.find((s) =>
        currentPathname.startsWith(s.href)
      );
      if (subpage) {
        setCurrentSubpage(subpage.name);
      }
    }
  }, []);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {currentPage && (
          <React.Fragment>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={pages[0].href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {currentPage}
                </a>
              </div>
            </li>
            {currentSubpage && (
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-4 text-sm font-medium text-gray-500">
                    {currentSubpage}
                  </span>
                </div>
              </li>
            )}
            {pages.subpages && (
              <li>
                <div className="flex items-center ml-4">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <select
                    className="ml-2 text-sm font-medium text-gray-500 bg-transparent cursor-pointer hover:text-gray-700"
                    value=""
                    onChange={(e) => {
                      const subpage = pages.subpages?.find(
                        (s) => s.name === e.target.value
                      );
                      if (subpage) {
                        window.location.href = subpage.href;
                      }
                    }}
                  >
                    <option value="" disabled>
                      Select a subpage
                    </option>
                    {pages.subpages.map((subpage) => (
                      <option key={subpage.name} value={subpage.name}>
                        {subpage.name}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            )}
          </React.Fragment>
        )}
      </ol>
    </nav>
  );
}
