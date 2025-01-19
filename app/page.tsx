import BentoHomeSection from "./components/BentoHomeSection";
import Categories from "./components/Categories";
import Collections from "./components/collection/Collections";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />
      <Topbar />
      <BentoHomeSection />
      <Categories />
      <Collections />
    </main>
  );
}
