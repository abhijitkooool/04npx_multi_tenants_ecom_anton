import { Footer } from "./footer";
import { Navbar } from "./navbar";

//2.2 define Props as an Interface
interface Props {
  //2.3 define children are defined as ReactNode given by React
  children: React.ReactNode;
}
//1. define layout
//2.1  pass the children component or page component as props
const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      {/* pass the contents of the children page component bg color to bg-[#f4f4f0] and the content to take the max space i.e. at extreme bottom, we can see the background colors of the textarea is getting messed up  */}
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
