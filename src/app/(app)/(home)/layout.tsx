// E5.5 we should also make sure there is no "use client"; directive
// E5.2 import the configPromise and getPayload 
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  // E5.3 establish a connection with getPayload by passing configPromise
  const payload = await getPayload({
    config: configPromise,
  });

  // E5.4 bring in the top level categories from the DB through payload
  const data = await payload.find({
    collection: "categories",
    depth: 1, // E9.07.1 "depth=0"-> will populate subcategories as type of string 
    // E9.07.2 but "depth=1"-> will populate subcategories as type of categories 
    // E9.01 we disable the pagination
    pagination: false,
    sort: "createdAt", // sort: "-createdAt" i.e. prefix(-) provides descending order
    where: {
      parent: {
        exists: false,
      },
    },
  });

  // E9.02 next we are going to format the data as an ARRAY of object of the top level categories and the immediate children of the top level category i.e. the subcategories as an ARRAY of object of type category that are subcategory to the top level one. // E9.03 for that we are using the spread operator
  const formattedData = data.docs.map((doc) => ({
    // E9.04 the first doc collection from the data is mapped using a spread operator
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // E9.05 then the subcategories are processed but as subcategories for a top level category is optional i.e. its doc collection may either be a string or array, it needs to be considered
      // E9.06 Because of "depth=1" we are confidant, doc will be a type of "category", to confirm we check by changing the depth=0 we see that the subcategories becomes an object of numbers and alphabets formed of the string of ids of categories which are subcategory of the parent === BREAKS THE APP
      ...(doc as Category),
      // E9.08 and explicitly defining the subcategories of the 2nd level categories to "undefined"
      subcategories: undefined,
      // E9.09 now we can finally send this formattedData to the <Categories /> component via the <SearchFilter />
    })),
  }));

// console.log({
//   data,
//   formattedData
//   });

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      {/* E5.1 pass the Data as prop to the SearchFilter component */}
      {/*  E9.10 send the formattedData to SearchFilters  */}
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
