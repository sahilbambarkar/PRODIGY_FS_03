import { Heart, Search, ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthContextProvider from "@/contexts/AuthContext";
import HeaderClientButtons from "./HeaderClientButtons";
import AdminButton from "./AdminButton";


export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "https://www.linkedin.com/in/sahil-bambarkar-7082632b2",
    },
    {
      name: "Contact",
      link: "mailto: rajubambarkar@gmail.com",
    },
  ];

  return (
    
    <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">
      <Link href={"/"}>
        <img className="h-20 md:h-13" src="/logo.png" alt="Logo" /> {/* Increased logo size */}
      </Link>
      <div className="hidden md:flex gap-2 items-center font-semibold">
        {menuList?.map((item) => {
          return (
            <Link href={item?.link} key={item.name}> {/* Added key prop */}
              <button className="text-lg px-6 py-3 rounded-lg hover:bg-gray-50"> {/* Increased button size */}
                {item?.name}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-1">
        <AuthContextProvider>
          <AdminButton />
        </AuthContextProvider>
        
        <AuthContextProvider>
          <HeaderClientButtons />
        </AuthContextProvider>
        <Link href={`/account`}>
          <button
            title="My Account"
            className="h-10 w-10 flex justify-center items-center rounded-full hover:bg-gray-50" 
          >
            <UserCircle2 size={22} /> {/* Increased icon size */}
          </button>
        </Link>
        <AuthContextProvider>
          <LogoutButton />
        </AuthContextProvider>
      </div>
    </nav>
  );
}