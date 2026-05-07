import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Employment } from "@/components/employment";
import { Plans } from "@/components/plans";
import { InquirySection } from "@/components/inquiry-section";
import { Testimonials, Contact } from "@/components/footer-sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Employment />
      <Plans />
      <InquirySection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
