import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

// E8.1
interface Props{
  data: any;
}

// E8.2
export const Categories = ({
  data
}: Props) => {


  console.log(data);
  

  return (
    <div className="flex flex-nowrap items-center gap-4">
      {/* {JSON.stringify(data, null, 2)} */}
      {/* now we reached to this milestone as did before */}
      {/*  E8.3 we want to receive the data from the db in a specific way so we next go to the "src/app/(app)/(home)/layout.tsx" to modify it the way we want ->T@2:36:00/11:16:33 multi tenant ecom anton*/}
      {/* E9.12 now we can stringify the json data within formattedData from layout.tsx and form the button/link component to display all the product belong to that category */}
      {/* E8.4 after E9.12 we now use map() to data received and with it pass the payload-type::Category to a new CategoryDropdown component */}
      {/* E8.6 map() method syntax =>  array.map((type:Type)=>()) */}
      {data.map((category: Category) => (
        <div key={category.id}>
          {/* E8.5.1 pass the category to the CategoryDropdown component as well pass few other required props */}
          <CategoryDropdown
            category={category}
            // E8.5.2 optional implement later
            isActive={false}
            // E8.5.3 optional implement later
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
};