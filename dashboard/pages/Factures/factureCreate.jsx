import Header from "@/components/header";
import Navbar from "@/components/navBar";
import FactureForm from "./components/factureForm";
export default function FactureCreate() {
    return (
      <>
        <Navbar />
        <Header />
        <div className="p-5">
            <FactureForm/>
          </div>
      
      </>
    );
}