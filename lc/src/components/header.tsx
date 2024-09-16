import ProgressBar from "./progbar";

const Header = ({ scrollToToday }: { scrollToToday: () => void }) => {
  return (
    <header className="header">
      <h1>Life Calendar</h1>
      <p>
        Welcome to my life's epic saga, visualized one day at a time! If you're wondering why there are so many dark circles, it's not because 
        I've been sleep-deprived—those are just the days I've already lived. The lighter circles are my future days, eagerly awaiting their turn in the spotlight. 
        Black squares? They're like VIP passes to the coolest moments in my life. This project is my way of turning time into a giant, colorful game board—because who wouldn't want 
        to gamify their existence?
         <br></br>
         <br></br>
        <button onClick={scrollToToday}>Hit this button</button> to teleport to today and see what's up!
      </p>
      <ProgressBar />
    </header>
  );
};

export default Header;
