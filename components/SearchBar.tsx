import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center w-full space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">Search</Button>
    </div>
  )
}

export default SearchBar
