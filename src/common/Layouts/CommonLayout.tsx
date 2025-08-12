// src/layouts/CommonLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../footer";

export default function CommonLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where your page content renders */}
      <Footer />
    </>
  );
}
