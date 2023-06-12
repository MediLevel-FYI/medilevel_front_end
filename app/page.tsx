import { CompensationDataTable } from "@/components/datatables/compensation/CompensationDataTable"
import { columns } from "@/components/datatables/compensation/CompensationColumnDef"
import { compensationData } from "@/_compensationData"


export default function Home() {
  const data = compensationData
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h1>Hello, World!</h1>
      <p>Main body area for charts, graphs, etc.</p>
      <div className="container py-10 mx-auto">
        <CompensationDataTable columns={columns} data={data} />
      </div>
    </main>
  )
}
