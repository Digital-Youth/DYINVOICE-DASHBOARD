export default function ClientInfo() {
  return (
    <div className=" bg-white shadow-xl rounded-2xl p-6">
      <div className="min-w-0 flex items-center">
        <h2 className="text-lg font-bold leading-7 text-black sm:truncate sm:text-lg sm:tracking-tight flex-grow flex-shrink-0">
          Client Details
        </h2>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-gray-300 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-300"
        >
          ---
        </button>
      </div>

      <h4 className="text-lg leading-7 text-gray-500   sm:truncate sm:text-lg sm:tracking-tight">
        21julesjunior@gmail.com
      </h4>

      <h4 className="text-lg leading-7 text-gray-500   sm:truncate sm:text-lg sm:tracking-tight">
        09 89 89 787 99
      </h4>
      <hr />
      <br />
      <div className="mt-4 flex md:mt-0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          voluptatres libero magnam quasi temporibus!
        </p>
      </div>
    </div>
  );
}
