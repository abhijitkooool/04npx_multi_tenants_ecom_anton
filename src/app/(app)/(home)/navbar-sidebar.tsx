//c7.6.x
import Link from "next/link";
// c7.4.2
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// c7.4.3 we also need the ScrollArea as well
import { ScrollArea } from "@/components/ui/scroll-area";


//c7.1
interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

// c7.2
interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

//c7.3
export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  // c7.4.1 we are going to import and use the sheet component from shadcnUI we can also use the sidebar component but anton demo used sheet

  // c7.5.0 we need to return a sheet component
  return (
    <Sheet
      // c7.5.1
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          {/* c7.5.2 we can now place <NavbarSidebar /> in the "src/app/(home)/navbar.tsx" anywhere from within the nav markup  */}
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        {/* c7.6 from c6.9.3 we use the scroll area and within it iterate the nav items*/}
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              // c7.7 lets also make sure that when we click on any link in the NavbarSidebar the sidebar closes
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          {/* login & start selling button  */}
          <div className="border-t">
            <Link
              onClick={() => onOpenChange(false)}
              href="/signin"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Login
            </Link>
            <Link
              onClick={() => onOpenChange(false)}
              href="/signup"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
