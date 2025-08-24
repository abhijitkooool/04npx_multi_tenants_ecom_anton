import { Category } from "@/payload-types";

import Link from "next/link";

interface Props {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}
//E12.00 from E10.18 of "src/app/(app)/(home)/search-filters/category-dropdown.tsx" create and export
export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  // E12.01 check if isOpen is false or if category doesn't have subcategory or if subcategories array length is less than 0 we return null
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    // E12.02 till now when we use category.subcategories.length the length part shows type error, because we are using formattedDate instead of the data which was a docs collection. We will solve it later
    return null;
  }

  // E12.03
  const backgroundColor = category.color || '#F5F5F5'; // as default color

  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left
      }}
    >
      {/* E12.04 create an invisible bridge to maintain hover */}
      <div
        className="h-3 w-60 bg-transparent"
      />
      <div
        style={{backgroundColor:backgroundColor}}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] X-translate-x-[2px] X-translate-y-[2px]">
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link 
              key={subcategory.slug}
              href={subcategory.slug}
              className="w-full text-left p-2 hover:bg-black hover:text-white flex justify-between items-center underline font-medium capitalize"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
