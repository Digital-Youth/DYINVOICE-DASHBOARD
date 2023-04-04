

export default function Card({icon, name, value}) {
  return (
    <div>
      <dl>
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute h-6 w-6 rounded-md bg-blue-500 p-3">
              {icon}
              {/* <item.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  View all<span className="sr-only"> {name} stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
