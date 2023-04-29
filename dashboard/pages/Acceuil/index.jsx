
import {
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Card from "@/components/Cards/card";
import NewCard from "@/components/Cards/newcard";
import ClientsTable from "@/components/TableHome/clientTable";
import FacturesTable from "@/components/TableHome/facturesTable";
import Navbar from "@/components/navBar";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Accueil() {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <Header message={"Bienvenue,"} name={"Terence"} />
        <main>
          <div>
            <div className="mt-5 mx-3 py-6 sm:px-6 lg:px-8 ">
              {/* Your content */}
              <Card icon={<UserGroupIcon />} name="Clients" value={12} />
            </div>
            {/* <div className="lg:px-10 grid grid-cols-1 gap-3 sm:grid-cols-2 ">
              <ClientsTable />
              <FacturesTable />
            </div> */}
            <div className="mt-5 mx-3 py-6 sm:px-6 lg:px-8 grid grid-cols-1">
              <NewCard />
            </div>
            {/*End of Your content */}
          </div>
        </main>
        <div>
          <Footer />
        </div>
       
      </div>
    </>
  );
}
