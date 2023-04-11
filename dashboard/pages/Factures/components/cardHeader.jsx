export default function CardHeader({ value }) {
  const newValue = `0${value}`;
  return (
    <div className="px-5 py-6 h-auto">
      <dl>
        <div className="relative h-52 overflow-hidden rounded-lg bg-blue-400 px-4 pb-12 pt-5 shadow-2xl sm:px-6 sm:pt-6 flex flex-col justify-end items-end place-content-end w-full">
          {/* <dd className="mt-2 flex items-baseline self-end">
            <p className="text-4xl font-semibold text-gray-900">{newValue}</p>
          </dd> */}
        </div>
      </dl>
    </div>
  );
}
