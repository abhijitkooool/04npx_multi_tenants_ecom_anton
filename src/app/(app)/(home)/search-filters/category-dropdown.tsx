// E10.05 mark the component to "use client"; directive to avoid error like "Build Error" | "Ecmascript file had an error" | "You're importing a component that needs `useRef`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive."
"use client";

import { useRef, useState } from "react";

import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

import { Category } from "@/payload-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  category: Category;
  isActive?: boolean; // (important symbol) ? as optional todo later
  isNavigationHovered?: boolean; // (important symbol) ? as optional todo later
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  // E10.04 next we need to define the state of the button behavior i.e. isOpen and set it false on load
  const [isOpen, setIsOpen] = useState(false);
  // E10.06 next we define dropdownRef using useRef and importing it from react
  const dropdownRef = useRef<HTMLDivElement>(null);
  // E10.16 from E11.5 import useDropdownPosition and pass the dropdownRef and bring in the getDropdownPosition
  const { getDropdownPosition } = useDropdownPosition(dropdownRef);

  // E10.07 define "onMouseEnter" and "onMouseLeave" event listeners for the category dropdown button elements to display and hide the menu
  const onMouseEnter = () => {
    // E10.08 checking if the category.subcategories is set
    if (category.subcategories) {
      setIsOpen(true);
      // console.log("hi");
    }
  };

  // E10.09 simple version of arrow function
  const onMouseLeave = () => {
    setIsOpen(false);
    // console.log("bye");
  };

  // console.log(category); // gives individual top level category names iterating through formattedData

  // E10.17.4 
  const dropdownPosition = getDropdownPosition();


  return (
    <div
      // E10.10 next we bind the event listeners with the element by wrapping the <Button></Button> within a <div> having relative position, dropdownRef and the event-listeners.
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // E10.11 Now that event listeners are working lets create an indicator for the dropdown for that lets next wrap the <Button></Button> again within a div having relative and conditionally placing a the indicator content div
    >
      <div className="relative">
        <Button
          // E10.01 elevated variant
          variant="elevated"
          // E10.02 we use cn() to merge classNames with the default one i.e. dynamic
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-xl hover:bg-white hover:border-primary text-black",
            // E10.03 isActive i.e. products of the current category is displayed & isNavigationHovered will make sure when the current category is active and the button is NOT hovered then the following styles take effect
            isActive && !isNavigationHovered && "bg-white border-primary"
          )}
        >
          {category.name}
        </Button>
        {
          // E10.12 condition checking if category has subcategories and it is an array of length more than Zero
          category.subcategories && category.subcategories.length > 0 && (
            // E10.13 if true then the indicator will be contained within a self closing div having dynamic classes based on condition
            <div
              className={cn(
                "opacity-0 absolute -bottom-3 left-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black -translate-x-1/2",
                // 10.14 then if isOpen is true i.e. the category button is hovered than add class "opacity-100"
                isOpen && "opacity-100"
              )}
            />
            // E10.15 next in order to display the dropdown list of sub categories we first need to develop a hook that will be responsible for determining the position of the list to display based on the position button on the screen and screen real estate. By creating a new file "src/app/(app)/(home)/search-filters/use-dropdown-position.tsx" in E11
          )
        }
      </div>
      {/* E10.17.0 from E11.15 of "src/app/(app)/(home)/search-filters/use-dropdown-position.tsx", lets create the dropdown menu listing the sub categories */}
      <SubcategoryMenu
        // E10.17.1 category from the prop
        category={category}
        // E10.17.2 the state
        isOpen={isOpen}
        // E10.17.3 dropdownPosition from the getDropdownPosition
        position={dropdownPosition}
      />
      {/* E10.18 create "src/app/(app)/(home)/search-filters/subcategory-menu.tsx" */}
    </div>
  );
};
