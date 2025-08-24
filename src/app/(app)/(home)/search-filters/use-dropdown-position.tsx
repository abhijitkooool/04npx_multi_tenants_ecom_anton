import { RefObject } from "react";

// E11.01
export const useDropdownPosition = (
  // E11.02 where the ref would be a RefObject of type HTMLDivElement
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  // E11.03 define the method "getDropdownPosition"
  const getDropdownPosition = () => {
    // E11.06 first of all we will check if ref.current is not present then we will simply sent top-0 left-0. i.e. if dropdownRef(i.e. the div wrapping the button) can not be detected then we don't calculate any thing and simply send top=0 left=0
    if (!ref.current) return { top: 0, left: 0 }
    
    // E11.07 when ref.current is present then we will get the rect that is bounding the current ref i.e. the dropdownRef
    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // for width of dropdown we use className (w-60 = 15rem = 240px)

    // E11.08 calculate the initial position 
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // E11.09 check if dropdown would go off the right edge of the viewport by checking if the sum of left and the dropdownWidth is larger than window inner width
    if (left + dropdownWidth > window.innerWidth) {
      // E11.10 if(above is true) then align to the right edge of the button instead of the left edge
      left = rect.right + window.scrollX - dropdownWidth; // E11.11 we are basically preventing the dropdown from overflowing, this is what most dropdown libraries have builtin but we are making this from scratch by our own.

      // E11.12 if after this we are checking if the dropdown is still off-screen i.e. if left of the dropdown is in negative, then align to the right edge of the viewport with some padding, i.e. the new left will be calculated by subtracting the dropdownWidth from the inner window width also subtract some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }
    // E11.13 check if dropdown do not go off the left edge then add a padding to get the new left
    if (left < 0) {
      left = 16; // i.e. with padding
    }
    // E11.14 return top and left
    return { top, left };
  };

  // E11.15 next we go to the category-dropdown.tsx to create a dropdown menu in the E10.17 for the current category using the position sent from here.


  // E11.04 the only thing we are going to return from this hook is this getDropdownPosition
  return { getDropdownPosition };
  // E11.05 next we are going to the "src/app/(app)/(home)/search-filters/category-dropdown.tsx" and prepare it receive the getDropdownPosition and use it to correctly render the dropdown menu.
}