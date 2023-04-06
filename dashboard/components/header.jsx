import Breadcrumb from "./Navigation/breadCrumbs";

export default function Header({message,name}) {
    return (
      <div>
        <header className="bg-white shadow  ">
          <div className="mx-auto max-w-7xl px-4 py-6 text-xl  sm:flex sm:items-center ">
            <div className="sm:flex-auto">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {message} {name}
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