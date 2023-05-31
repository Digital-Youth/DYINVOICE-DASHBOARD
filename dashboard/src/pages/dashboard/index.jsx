import React from "react";
import SideBar from "@/components/Navbar/SideBar";
import Card from "@/components/Widgets/Card";
import InvoicesTable from "@/components/Widgets/InvoicesTable";
import ClientsTable from "@/components/Widgets/ClientsTable";

import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon, UserIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Footer from "@/components/Footer";

const factures = [
  {
    id: 1,
    name: "Factures"
  }
];

function Dashboard() {
  return (
    <SideBar>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Quick add Client</button>

      <div class="grid gap-4 grid-cols-2">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>

      <div className="mt-5">
        <InvoicesTable/>
      </div>

      <div className="mt-5">
        <ClientsTable/>
      </div>

      <Footer/>
    </SideBar>
  );
}

export default Dashboard;
