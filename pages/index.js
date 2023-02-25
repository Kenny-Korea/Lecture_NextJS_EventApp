import EventList from "../components/events/event-list";
import ResultsTitle from "../components/events/results-title";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
