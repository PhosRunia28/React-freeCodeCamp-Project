import { Cross2Icon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { links } from "../js/links";
export default function NavBar({ setOpenNav, openNav }) {
  return (
    <>
      <div
        className="flex cursor-pointer justify-center bg-gray-200"
        onClick={() => setOpenNav(true)}
      >
        <DoubleArrowDownIcon className="h-8 w-8" />
      </div>
      <AnimatePresence>
        {openNav && (
          <motion.nav
            className="bg-bgNav absolute inset-x-0 top-0 z-50 px-8 pb-8 pt-4"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex cursor-pointer justify-end md:mx-auto md:max-w-3xl">
              <Cross2Icon
                className="h-10 w-10"
                onClick={() => setOpenNav(false)}
              />
            </div>
            <div className="font-kodeMono flex flex-wrap justify-center gap-6 md:mx-auto md:max-w-3xl md:gap-8">
              {links.map((link, index) => {
                return (
                  <NavLink
                    to={link.to}
                    key={index}
                    className="textNa bg-bgButtonNav text-textNav mx-auto w-full max-w-[12rem] rounded-xl px-6 py-2 text-center"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                      };
                    }}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
