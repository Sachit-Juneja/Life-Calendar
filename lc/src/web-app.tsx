import { useRef } from "react";
import { Tooltip } from "react-tooltip";
// If the above import throws error use yarn or npm and run the below commmand
// npm install react-tooltip

import "./web-app.css";
import Day from "./components/day";
import { generateDateArray } from "./utils/gendays";
import Header from "./components/header";

function App() {
  const days = generateDateArray();

  const dotContainerRef = useRef<HTMLDivElement>(null);

  const scrollToToday = () => {
    const currentDot = dotContainerRef.current?.querySelector("#today");
    if (currentDot) {
      currentDot.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="container">
      <Header scrollToToday={scrollToToday} />
      <div className="day-grid" ref={dotContainerRef}>
        {days.map((day, i) => {
          return (
            <Day
              key={i}
              date={day.date}
              past={day.past}
              url={day.url}
              today={day.today}
              summary={day.summary}
              birthday={day.birthday}
            />
          );
        })}
      </div>
      <Tooltip id="tooltip" />
    </div>
  );
}

export default App;