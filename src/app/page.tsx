import Hero from "./components/Hero";
import RaceCalendarWrapper from "./components/RaceCalendarWrapper/RaceCalendarWrapper";
import RacePerformanceCard from "./components/RacePerformanceCard";

const HomePage = () => {
  return (
    <>
      <Hero />
      <RaceCalendarWrapper />
      <RacePerformanceCard />
    </>
  );
};

export default HomePage;
