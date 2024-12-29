import Navbar from "./components/Navbar";
import VerticalSocialIcons from "./components/VerticalSocialIcons";
import VeritcalComponent from "./components/VeritcalComponent";
import VerticalMail from "./components/VerticalMail";
import Hero from "./pages/Hero";
import Education from "./pages/Education";

const App = () => {
  return (
    <main className="relative h-screen text-white bg-[#09090b] overflow-x-hidden">
      <Navbar />
      <VeritcalComponent position={"right"}>
        <VerticalMail />
      </VeritcalComponent>
      <VeritcalComponent position={"left"}>
        <VerticalSocialIcons />
      </VeritcalComponent>

      {/* Hero */}
      <Hero />

      {/* Education */}
      <Education />
    </main>
  );
};

export default App;
