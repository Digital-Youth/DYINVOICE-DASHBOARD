import Breadcrumb from "./Navigation/breadCrumbs";

export default function Header({message,name}) {
    return (
      <div>
        <header className="bg-white shadow  ">
          <div className="mt-5 mx-3 py-6 sm:px-6 lg:px-8 sm:flex sm:items-center ">
            <div className="sm:flex-auto">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {message}  <span className="text-blue-500" >{name}</span> 
              </h1>
            </div>

            <div>
              <Breadcrumb />
            </div>
          </div>
        </header>
      </div>
    );
}