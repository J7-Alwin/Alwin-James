import "@/App.css";
import { useTheme } from "@/hooks/useTheme";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { Footer } from "@/components/Footer";

function App() {
  const { mode, setMode } = useTheme();

  return (
    <div className="App min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Header mode={mode} setMode={setMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <ExperienceEducation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
