import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function Project() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <NavBar openNav={openNav} setOpenNav={setOpenNav} />
      <Outlet />
    </div>
  );
}
