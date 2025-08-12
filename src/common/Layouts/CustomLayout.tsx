// src/layouts/CustomLayout.tsx
import { Outlet } from "react-router-dom";

export default function CustomLayout() {
  return (
    <>
      {/* No Navbar/Footer here, or add your own custom ones */}
      <Outlet />
    </>
  );
}
