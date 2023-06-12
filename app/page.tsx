import { CompensationDataTable } from "@/components/datatables/compensation/CompensationDataTable"
import { columns } from "@/components/datatables/compensation/CompensationColumnDef"
import { compensationData } from "@/_compensationData"


export default function Home() {
  const data = compensationData
  return (
    <main className="flex flex-col items-center min-h-screen p-12">
      <div className="flex flex-wrap w-full sm:justify-start sm:flex-nowrap">
        <div className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold text-blue-600">Healthcare Provider Compensation</p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Table of Specialist Compensation</h1>
            <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">This is a table of compensation data for healthcare providers in various specialties.</p>
          </div>
        </div>
      </div>
      <div className="container py-10 mx-auto">
        <CompensationDataTable columns={columns} data={data} />
      </div>
    </main>
  )
}
