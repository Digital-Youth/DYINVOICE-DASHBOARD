
import BoardClient from "@/components/boardClient";
import Card from "@/components/card";
import Header from "@/components/header";
import Navbar from "@/components/navBar";



export default function Clients() {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <Header message={"Gestion de"} name={" Clients"} />
        <main>
          <div>
            <div className="p-7 mx-3 sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">
                  Clients
                </h1>
                <p className=" text-sm text-gray-700">
                  Une liste de tous les clients de votre compte, avec leur nom,
                  leur titre, leur adresse mail.
                </p>
              </div>
            </div>
            <div className=" mx-3 py-6 sm:px-6 lg:px-8">
              <BoardClient />
            </div>
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}
