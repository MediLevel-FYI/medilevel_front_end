import { CompensationDataTable } from "@/components/datatables/compensation/CompensationDataTable"
import ContributeModal from "@/components/ContributeModal"
import { columns } from "@/components/datatables/compensation/CompensationColumnDef"
import { getAllCompensation } from "@/utils/getAllCompensation"
import { Compensation } from "@/schemas/compensationSchema"


export default async function Home() {
  const data = await getAllCompensation() as Compensation[]
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-wrap w-full sm:justify-start sm:flex-nowrap">
        <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto sm:flex sm:items-center">
          <div className="">
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Healthcare Provider Compensation
            </p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              Welcome to MedPay!
            </h1>
            <p className="mt-2 text-base text-gray-800 sm:text-lg dark:text-gray-400">
              We&apos;re here to build a free, open, and transparent database that helps you level up your earnings and even the playing field with your employers.
            </p>
            <p className="mt-2 text-base text-gray-800 sm:text-lg dark:text-gray-400">
              No more feeling in the dark when you&apos;re researching what you should be earning in your next contract and role. Join us now, and together let&apos;s inform your negotiations and secure the compensation you truly deserve.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContributeModal />
      </div>
      <div className="w-full px-4 py-5 mx-auto sm:container sm:py-10">
        <CompensationDataTable columns={columns} data={data} />
      </div>
    </main>
  )
}
