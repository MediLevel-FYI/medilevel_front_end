import { CompensationDataTable } from "@/components/datatables/compensation/CompensationDataTable"
import ContributeModal from "@/components/ContributeModal"
import { columns } from "@/components/datatables/compensation/CompensationColumnDef"
import { compensationData } from "@/_data/_compensationData"


export default function Home() {
  const data = compensationData
  return (
    <main className="flex flex-col items-center min-h-screen p-12">
      <div className="flex flex-wrap w-full pb-10 sm:justify-start sm:flex-nowrap">
        <div className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center">
          <div className="">
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Healthcare Provider Compensation
            </p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              Welcome to MedPay!
            </h1>
            <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
              We&apos;re here to build a free, open, and transparent database that helps you level up your earnings and even the playing field with your employers.
            </p>
            <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
              No more feeling in the dark when you&apos;re researching what you should be earning in your next contract and role. Join us now, and together let&apos;s inform your negotiations and secure the compensation you truly deserve.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContributeModal />
      </div>
      <div className="container py-10 mx-auto">
        <CompensationDataTable columns={columns} data={data} />
      </div>
    </main>
  )
}
