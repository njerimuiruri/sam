import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuoteBand from "@/components/QuoteBand";
import PracticeAreas from "@/components/PracticeAreas";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Divider } from "@/components/ornaments";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <QuoteBand />
        <PracticeAreas />
        <Approach />
        <Testimonials />
        <div className="bg-white py-10">
          <Divider />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
