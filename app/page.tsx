import { CompensationDataTable } from "@/components/datatables/compensation/CompensationDataTable"
import ContributeModal from "@/components/ContributeModal"
import { columns } from "@/components/datatables/compensation/CompensationColumnDef"
import prismaGetAllCompensation from "@/utils/prismaGetAllCompensation"

export const revalidate = 60

export default async function Home() {
  const data = await prismaGetAllCompensation()
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
              We&apos;re building a free and open database to help doctors and medical providers compare their compensation.
            </p>
            <p className="mt-2 text-base text-gray-800 sm:text-lg dark:text-gray-400">
              No more being in the dark when you&apos;re researching what you should be earning in your next contract and role. No more scrounging for contacts at multiple hospitals to ask how much they&apos;re paid. No more lingering doubts about your existing contract and compensation. Let&apos;s level the playing field for doctors everywhere.
            </p>
            <p className="mt-2 text-sm text-gray-800 sm:text-base dark:text-gray-400">
              <em className="font-bold text-black">Note:</em> We are currently focusing on gathering data for <i className="text-gray-800 underline">Seattle-based</i> medical institutions and a limited set of specialties. We will be expanding to more geographies and specialties on an ongoing basis.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContributeModal />
      </div>
      <div className="w-full px-4 py-5 mx-auto sm:container sm:py-10">
        {data.length < 1 ?
          <p className="text-center align-middle text-large">
            Be the first to contribute!
          </p>
          :
          <CompensationDataTable columns={columns} data={data} />
        }
      </div>
    </main>
  )
}
