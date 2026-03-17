import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { CursorFollower } from "./CursorFollower";
import { GridBackground } from "./GridBackground";
import { ParticleBackground } from "./ParticleBackground";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white relative">
      <GridBackground />
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <CursorFollower />
    </div>
  );
}