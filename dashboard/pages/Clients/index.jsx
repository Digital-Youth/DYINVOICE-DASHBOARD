
import NewBoardClient from "@/components/BoardPages/newBoardClient";
import Header from "@/components/header";
import Navbar from "@/components/navBar";
import ClientsHeader from "./clientsHeader";



export default function Clients() {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <Header message={"Gestion des"} name={" Clients"} />
       

        <main>
          <div>
            <div className="p-7 mx-3 sm:flex sm:items-center">
              <div className="sm:flex-auto">
              <ClientsHeader/>
              </div>
            </div>
            <div className=" mx-3 py-6 sm:px-6 lg:px-8">
              {/* <BoardClient /> */}

              <NewBoardClient/>
              
            </div>
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}
