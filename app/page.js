import AboutSection from "./Components/HomePage/About";
import FeaturesSection from "./Components/HomePage/FeaturesSection";
import HeroSection from "./Components/HomePage/HeroSection";
import LatestPosts from "./Components/HomePage/LatestPosts";
import TagsCloud from "./Components/HomePage/TagsCloud";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturesSection />

      <LatestPosts />

      <TagsCloud />

      <AboutSection />
    </div>
  );
}
