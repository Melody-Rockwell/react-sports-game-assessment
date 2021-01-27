import logo from "./logo.svg";
import "./App.css";
import Game from "./component/game/Game";
import Scoreboard from "./component/scoreboard/Scoreboard";
import Team from "./component/team/Team";

function App() {
  const redPandas = {
    name: "Roseville Red Pandas",
    logo:
      "https://image.freepik.com/free-vector/red-panda-mascot-esport-logo-design_139366-360.jpg",
  };

  const polarBears = {
    name: "Polaris Polar Bears",
    logo:
      "https://image.freepik.com/free-vector/polar-bear-mascot-esport-illustration_188253-56.jpg",
  };

  const elephants = {
    name: "Edmondton Elephants",
    logo:
      "https://image.freepik.com/free-vector/elephant-sport-mascot-logo-design_167995-478.jpg",
  };

  const dolphins = {
    name: "Delta Dolphins",
    logo:
      "https://image.freepik.com/free-vector/dolphin-esport-logo-mascot-design_157186-410.jpg",
  };

  return (
    <div className="App">
      <Game
        venue="Colony Arena"
        homeTeam={redPandas}
        visitingTeam={polarBears}
      />
      <Game venue="Polaris Park" homeTeam={elephants} visitingTeam={dolphins} />
    </div>
  );
}

export default App;
