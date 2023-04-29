const stats = [
  { id: 1, name: 'Clients', value: '12' },
  { id: 2, name: 'Factures', value: '5' },
]

export default function Example() {
  return (
    <div className="rounded-xl bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Bilan des statistiques</h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 ">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-bold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-400">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
