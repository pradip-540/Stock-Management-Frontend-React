import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Inventory", href: "/dashboard/inventory", current: false },
  {
    name: "Purchase Details",
    href: "/dashboard/purchase-details",
    current: false,
  },
  { name: "Sales", href: "/dashboard/sales", current: false },
  { name: "Manage Store", href: "/dashboard/manage-store", current: false },
];

const userNavigation = [{ name: "Sign out", href: "./login" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const authContext = useContext(AuthContext);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav"  style={{
            backgroundColor: "#000080",
            fontFamily: "Adamina",
            color: "white",
            fontSize: "22px",
          }}>
          {({ open }) => (
            <>
              <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex justify-center items-center gap-4">
                      <a href="#logo" className="flex items-center">
                          <img
                            src="https://th.bing.com/th/id/OIP.rfrrCinbvDKXF4eLBqXuCAHaH2?rs=1&pid=ImgDetMain"
                            alt="Logo"
                            className="h-12 w-12 rounded-full"
                          />
                          <span className=" text-white"></span>
                        </a>
                        <Link to="/dashboard">
                          <span className="font-normal text-2xl text-white">
                            Dashboard
                          </span>
                        </Link>
                        <Link to="/dashboard/inventory">
                          <span className="font-normal text-2xl  text-white">
                            Inventory
                          </span>
                        </Link>
                        <Link to="/dashboard/purchase-details">
                          <span className="font-normal text-2xl  text-white">Purchase</span>
                        </Link>
                        <Link to="/dashboard/sales">
                          <span className="font-normal  text-2xl text-white">
                            Sold Products
                          </span>
                        </Link>
                        <Link to="/dashboard/manage-store">
                          <span className="font-normal  text-2xl  text-white">
                            Suppliers 
                          </span>
                        </Link>
                        <Link to="/dashboard/about">
                          <span className="font-normal text-2xl  text-white">
                            Customers Support
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6 ml-4">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    <span onClick={() => authContext.signout()}>
                                      {item.name}{" "}
                                    </span>
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <button
                        onClick={() => authContext.signout()}
                        className="btn  text-white bg-gray-500 rounded-md  text-base"
                      >
                        LogOut
                      </button>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link to={item.href} key={item.name}>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        // href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={localStorageData.imageUrl}
                        alt="profile"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {localStorageData.firstName +
                          " " +
                          localStorageData.lastName}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {localStorageData.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        <span onClick={() => authContext.signout()}>
                          {item.name}{" "}
                        </span>
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <Footer/>
    </>
  );
}
