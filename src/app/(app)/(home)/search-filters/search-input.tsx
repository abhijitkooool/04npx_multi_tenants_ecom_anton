import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

// E7.1 define the interface Props to be received 
interface Props {
  disabled:boolean
}

// E7.2
export const SearchInput = ({
  disabled,
}:Props) => {
  return (
    // E7.3 we design the search input box as shown
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-500" />
        <Input
          className="px-10 lg:py-4 text-lg"
          placeholder="Search products..."
          disabled={disabled}
        />
      </div>
      {/* E7.4 TODO: Add categories view all button, visible only in the mobile view, for later */}
      {/* E7.5 TODO: Add library button, visible only when the user is logged in, for later */}
      {/* E7.6 these above states, we are yet to have, for now we are going to create the categories buttons, in "src/app/(app)/(home)/search-filters/index.tsx" that will act as a search-filter for that categories */}
    </div>
  );
}
