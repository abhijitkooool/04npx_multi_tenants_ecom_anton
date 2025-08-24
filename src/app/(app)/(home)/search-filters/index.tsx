import { Categories } from "./categories";
import { SearchInput } from "./search-input";

// E4.2 lets create an interface of SearchFilterProps
interface SearchFilterProps {
  data: any;
};

//E4.1 initialize and export a very simple SearchFilter component and render this component inside of the "src/app/(app)/(home)/layout.tsx" by bringing in the async logic of "categories" data that we are fetching in the (home)/page.tsx to (home)/layout.tsx and further modify the "src/app/(app)/(home)/page.tsx" by removing the data fetching part and making simple non-async home page 
export const SearchFilters = ({
  // E4.3 lets destructure the props
  data,
}:SearchFilterProps) => {
  return (
    // E4.5 now design the search filter markup
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      {/* E4.6 lets bring in a search input component */}
      <SearchInput disabled={true} />
      {/* E4.4 display the json data as a string */}
      {/* {JSON.stringify(data, null, 2)} from E7.6 remove this JSON stringification now */}
      {/* E4.7 now we display the categories for the search */}
      {/* E9.11 from the layout the formattedData is received as data props in Categories component */}
      <Categories data={data} />
    </div>
  );
};



