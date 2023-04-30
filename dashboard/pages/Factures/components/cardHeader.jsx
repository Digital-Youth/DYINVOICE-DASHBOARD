export default function CardHeader({ value }) {
  return (
    <div className="px-5 py-6 h-auto">
      <dl>
        <div
          className="relative h-52 overflow-hidden rounded-2xl bg-blue-600 px-4 pb-12 pt-5 shadow-2xl sm:px-6 sm:pt-6 flex flex-col w-full"
          style={{
            backgroundImage:
              "url('https://cdn.discordapp.com/attachments/934193185092157470/1102326966629183599/Banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div class="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3">
              <h3 className="mt-3 text-white font-medium">Invoice Number</h3>
              <h3 className="mt-3 text-white font-medium">INV-2002-234</h3>
              <h3 className="mt-3 text-white ">Issued Date: 21/07/3435</h3>
              <h3 className="mt-3 text-white ">Invoice Number</h3>
            </div>
            <div class="col-end-7 col-span-2">
              <div class="text-right">
                <h3 className="mt-3 text-white font-medium">Billing at</h3>
                <h3 className="mt-3 text-white font-medium">Jules Junior</h3>
                <h3 className="mt-3 text-white ">Lyon, Frnace</h3>
                <h3 className="mt-3 text-white ">Invoice Number</h3>
              </div>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
}
