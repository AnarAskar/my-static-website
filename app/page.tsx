import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import ProjectsList from "@/components/ProjectsList";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectShowcase />
      <ProjectsList />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
