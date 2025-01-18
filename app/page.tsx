import BentoHomeSection from "./components/BentoHomeSection";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />
      <Topbar />
      <BentoHomeSection />
      <Categories />
    </main>
  );
}
