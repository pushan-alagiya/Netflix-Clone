import Back from "./components/Background/Back";
import Tv from "./components/television/Tv";
import Mobile from "./components/mobile/Mobile";
import Multi from "./components/multidevice/Multi";
import Kids from "./components/kids/Kids";
import Que from "./components/questions/Que";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Back></Back>
      <div className="bar"></div>
      <Tv></Tv>
      <div className="bar"></div>
      <Mobile></Mobile>
      <div className="bar"></div>
      <Multi></Multi>
      <div className="bar"></div>
      <Kids></Kids>
      <div className="bar"></div>
      <Que></Que>
      <div className="bar"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
