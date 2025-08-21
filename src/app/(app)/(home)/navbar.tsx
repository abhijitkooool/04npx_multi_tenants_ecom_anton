// C6.5.14.2
"use client";
//global imports i.e. npm packages
//C6.3.0 import font Poppins from google font
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

//alias imports 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

// C6.3.1 prepare the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

// C6.5.02 lets create an Interface for the navarItems
interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean; //optional
}

// C6.5.01 we are going to define our NavbarItem component i.e. repeating individual link item or component
const NavbarItem = ({
  // C6.5.03 destructuring the interface
  href,
  children,
  isActive,
}: NavbarItemProps) => {
  //C6.5.04 return the button element for the navbarItem
  return (
    <Button
      // C6.5.12 this basically implies that the <Link>{children}</Link> will be treated as the component itself
      asChild
      // C6.5.09 introducing the variant
      variant="outline"
      className={
        // C6.5.10 using the cn() to define default classes and also pass optional or logically applied style classes
        cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", 
          isActive && "bg-black text-white hover:bg-black hover:text-white",
        )
      }
    >
      {/* C6.5.05 the children which can be either a string or nested button link object which we will define later*/}
      {/* C6.5.11  wrap the children inside of a <Link> and also need to pass an "asChild prop to the button"*/}
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}; 

// C6.5.06 lets define an array of navbarItem object, elements apart from home are purely for SEO purpose until business or programme logic is incorporated
const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/discover", children: "Discover" },
  { href: "/blog", children: "Blog" },
  { href: "/features", children: "Features" },
  { href: "/contact", children: "Contact" },
];

// C6.1
export const Navbar = () => {
  // C6.5.13 in order to properly implement the isActive prop we need to use the "usePathname()" hook provided by "next/navigation" lib
  const pathname = usePathname();
  // C6.5.14.1 after importing "usePathname()" hook we will surely get an error "importing a component that needs `usePathname`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive" -> thus we need to introduce the directive in the very top // C6.5.14.2
  // C6.5.14.3 it is like opening a portal, i.e. in Nextjs all components and pages inside "app" or "src/app" folder is by default a sever component. that means when we have to go and use the client component we have to open a portal using "use client"; directive. this error can also be fixed by using "use client"; in the parent component in our case "src/app/(home)/layout.tsx" but doing so all the children component now will be served as client component, which we do not want in this implementation.
  // C6.5.14.4 (@T1:15:00/11:16:33->multiTenant-multi-vendor-CWAnton) but one more thing that has to be remembered that if we use "use client" directive in the "src/app/(home)/layout.tsx" on contrary to popular misconception all component will treated as client except for the component that are passed through {children} prop then this will not be passed through the portal to be used as a client from the parent component, in that case that particular file needs to have the "use client" directive of its own.
  // C6.5.14.5 it also should be noted that it a component is marked with "use client" directive that does not means that it not server side rendered but it only implies that the component is a server client component and not a server component

  // c6.7.2 defining the state "isSidebarOpen" with a default value of "false" using useState() from react, then need to pass these state to the element
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // C6.2
    <nav className="h-16 flex justify-between border-b font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        {/* C6.4. cn() is provided by nextjs which gives us the ability to use className programmatically*/}
        <span className={cn("text-3xl font-semibold", poppins.className)}>
          NextEcom
        </span>
      </Link>

      {/* c6.6 from c7.5.2 lets place the <NavbarSidebar /> here */}
      {/* c6.7.1 we need to define states for the NavbarSidebar open and close states  */}
      <NavbarSidebar
        //c6.8.1 we pass the navbarItems as items next we can use the items in NavbarSidebar.tsx
        items={navbarItems}
        // c6.8.2 we pass the states as here
        open={isSidebarOpen}
        //c6.8.2.1 here we use the dispatch of the setAction i.e. setIsSidebarOpen to toggle the value of the isSidebarOpen for an action or trigger event   
        onOpenChange={setIsSidebarOpen}
        // c6.8.3 we can go to the frontend and see that we cannot see the mobile or NavbarSidebar but if we change the state of isSidebarOpen to true by useState(true) we can see it || next we need to create a button that only appears on mobile in c6.9 
      />

      {/* C6.5.07. now we are going to utilize the navbarItems by map() method */}
      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          // C6.5.08 calling the NavBarItem component
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {/* C6.5.15 now we are going to create the link buttons for login(sigin)/register(sinup) as shown below */}
      <div className="hidden items-center lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white text-primary hover:bg-srjt-accent transition-colors text-lg cursor-pointer"
        >
          <Link href="/signin">Login</Link>
        </Button>
        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-srjt-accent hover:text-black transition-colors text-lg"
        >
          <Link href="/signup">Start Selling</Link>
        </Button>
      </div>

      {/* C6.9 */}
      <div className="flex lg:hidden items-center justify-center">
        <Button
          // c6.9.1 
          variant="ghost"
          className="size-14 border-transparent bg-white"
          // c6.9.2
          onClick={() => setIsSidebarOpen(true)}
          // c6.9.3 we now go to NavbarSidebar.tsx to iterate the nav items
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>

    </nav>
  );
};

// C6.5.16 (@T1:23:00/11:16:33->multiTenant-multi-vendor-CWAnton) in C7 || next we are going to create another component for the mobile navigation inside the (home) route group folder 



