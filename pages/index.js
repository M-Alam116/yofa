import HeroSection from "@/components/Home/hero";
import NavBar from "@/components/navbar/NavBar";
import { Fragment } from "react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
}
