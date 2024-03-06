import { Cross2Icon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
import cn from "classnames";
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
            className="absolute inset-x-0 top-0 z-50 bg-bgNav px-8 pb-8 pt-4"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex justify-end md:mx-auto md:max-w-3xl">
              <Cross2Icon
                className="h-10 w-10 cursor-pointer"
                onClick={() => setOpenNav(false)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 font-kodeMono md:mx-auto md:max-w-3xl md:gap-8">
              {links.map((link, index) => {
                return (
                  <NavLink
                    to={link.to}
                    key={index}
                    onClick={() => setOpenNav(false)}
                    className={({ isActive }) =>
                      cn(
                        "mx-auto flex w-full max-w-[12rem] items-center justify-center rounded-xl px-6 py-2 text-center",
                        {
                          "bg-black font-bold text-white": isActive,
                          "bg-bgButtonNav text-textNav": !isActive,
                        },
                      )
                    }
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
