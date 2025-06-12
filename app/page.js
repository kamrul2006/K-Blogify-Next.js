import AboutSection from "./Components/HomePage/About";
import CategoriesSection from "./Components/HomePage/CategoriesSection";
import FeaturesSection from "./Components/HomePage/FeaturesSection";
import HeroSection from "./Components/HomePage/HeroSection";
import LatestPosts from "./Components/HomePage/LatestPosts";
import NewsletterSection from "./Components/HomePage/NewsletterSection";
import TagsCloud from "./Components/HomePage/TagsCloud";
import TestimonialsSection from "./Components/HomePage/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturesSection />

      <CategoriesSection />

      <LatestPosts />

      <TestimonialsSection />

      <TagsCloud />

      <AboutSection />

      <NewsletterSection />
    </div>
  );
}
