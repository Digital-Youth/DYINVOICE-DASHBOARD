const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    phone: "Member",
  },
];

export default function ClientsTable() {
  return (
    <div className="overflow-hidden mt-8 rounded-lg border-2 border-gray-200 px-4 pb-5 pt-5 sm:px-6 sm:pt-6">
      <div className="text-xl p-3">
        <p>Clients</p>
      </div>
      <table className="min-w-full divide-y divide-gray-300">
        <tbody className="rounded-lg p-2 ">
          {people.map((person, personIdx) => (
            <tr
              key={person.email}
              className={personIdx % 2 === 0 ? undefined : "bg-gray-50"}
            >
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                {person.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {person.email}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {person.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
