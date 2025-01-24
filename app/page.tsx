import BentoHomeSection from "./components/BentoHomeSection";
import Categories from "./components/Categories";
import Collections from "./components/collection/Collections";
import LastPart from "./components/LastPart";
import MiddleBanner from "./components/MiddleBanner";
import PageTransition from "./components/PageTransition";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <main>
      <PageTransition>
        <div className="max-w-screen-xl mx-auto">
          <Topbar />
          <BentoHomeSection />
          <Categories />
          <Collections />
          <MiddleBanner />
          <LastPart />
        </div>
      </PageTransition>
    </main>
  );
}
