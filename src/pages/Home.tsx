import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Services from "@/sections/Services";

const Process = lazy(() => import("@/sections/Process"));
const IndustrySolutions = lazy(() => import("@/sections/IndustrySolutions"));
const WhyChooseUs = lazy(() => import("@/sections/WhyChooseUs"));
const FeaturedProjects = lazy(() => import("@/sections/FeaturedProjects"));
const Testimonials = lazy(() => import("@/sections/Testimonials"));
const Team = lazy(() => import("@/sections/Team"));
const FAQ = lazy(() => import("@/sections/FAQ"));
const Pricing = lazy(() => import("@/sections/Pricing"));
const Contact = lazy(() => import("@/sections/Contact"));

function SectionLoader() {
  return <div className="min-h-[300px]" aria-hidden="true" />;
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />

      <div
        className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustedBy />
          <Services />
          <Suspense fallback={<SectionLoader />}>
            <Process />
            <IndustrySolutions />
            <WhyChooseUs />
            <FeaturedProjects />
            <Testimonials />
            <Team />
            <FAQ />
            <Pricing />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
