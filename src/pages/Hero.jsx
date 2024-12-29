import AnimatedBlurredBg from "../components/ui/AnimatedBlurredBg";
import GradientButton from "../components/ui/GradientButton";
import { FaLocationArrow } from "react-icons/fa";
import Stars from "../assets/stars.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero h-screen relative"
      style={{ background: `url(${Stars})` }}
    >
      {/* blurry background */}
      <AnimatedBlurredBg />

      <div className="relative flex flex-col items-center text-center justify-center h-full m-auto">
        {/* large title */}
        <h1 className="text-4xl sm:text-7xl font-bold">
          I'm Altaf Shaikh
          <br />
          <span className="bg-gradient-to-r from-indigo-200 to-indigo-500 text-transparent bg-clip-text">
            Software Developer.
          </span>
        </h1>

        {/* sub title */}
        <p className="mt-6 text-lg sm:text-xl">
          Transforming Concepts into Seamless User Experiences.
        </p>

        {/* cta button */}
        <div className="mt-16">
          <GradientButton>
            <span className="flex gap-2 items-center">
              Show my work <FaLocationArrow />
            </span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
