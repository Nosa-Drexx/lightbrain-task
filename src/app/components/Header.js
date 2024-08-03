"use client";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [showNavOnMobile, setShowNavOnMobile] = useState(false);
  const [currentPathActive, setCurrentPathActive] = useState("");
  const router = useRouter();
  const navList = [
    {
      name: "Featured",
      path: "/#Featured",
    },
    {
      name: "Detailed",
      path: "/#Detailed",
    },
    {
      name: "Project",
      path: "/#Project",
    },
  ];

  useEffect(() => {
    const hash = window.location?.hash?.split("#")[1];
    setCurrentPathActive(hash || "");
  }, []);
  return (
    <header className="main-header z-[1000]">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between ">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                ariaControls="mobile-menu"
                ariaExpanded="false"
                onClick={() => setShowNavOnMobile(!showNavOnMobile)}
                onBlur={() => setShowNavOnMobile(false)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <Menu className="text-xxl" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="h-12 w-auto"
                  src="/assets/images/main-logo.svg"
                  width={200}
                  height={200}
                  alt="Company Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center">
                <div className="flex space-x-4">
                  {navList.map((item, index) => (
                    <button
                      href={item.path}
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        currentPathActive === item.name ? "bg-gray-900" : ""
                      }`}
                      key={index}
                      onClick={() => {
                        router.replace(item.path);
                        setCurrentPathActive(item.name);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Add Here */}
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`sm:hidden overflow-hidden header-mobile-dropdown ${
            !showNavOnMobile ? "hide" : ""
          }`}
          id="mobile-menu"
        >
          <div className={`space-y-1 px-2 pb-3 pt-2`}>
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            {navList.map((item, index) => (
              <button
                href={item.path}
                className={`flex justify-start rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white size-full ${
                  currentPathActive === item.name ? "bg-gray-900" : ""
                }`}
                key={index}
                onClick={() => {
                  router.replace(item.path);
                  setCurrentPathActive(item.name);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
