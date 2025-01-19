import BentoHomeSection from "./components/BentoHomeSection";
import Categories from "./components/Categories";
import Collections from "./components/collection/Collections";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import TopInfo from "./components/TopInfo";

export default function App() {
  return (
    <main>
      <CookieBanner />
      <TopInfo />
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Topbar />
        <BentoHomeSection />
        <Categories />
        <Collections />
      </div>
      <Footer />
    </main>
  );
}
