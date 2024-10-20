import Footer from "../../common/Footer";
import Hero from "../../components/Hero";
import QuestBanner from "../../components/QuestBanner";
import Stats1 from "../../components/Stats1";
import Stats2 from "../../components/Stats2";

export default function Home({ appStats }) {
  return (
    <div className="h-screen">
      <Hero />
      <Stats1 appStats={appStats} />
      <QuestBanner />
      <Footer />
    </div>
  );
}
