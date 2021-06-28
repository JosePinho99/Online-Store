import Building from "./Images/building.png"
import Footer from "./Footer"
import Info from "./Info"

function App() {
  return (
    <div>
        <img id="building-image" src={Building} alt="Building"></img>
        <Info />
        <Footer id="footer"/>
    </div>
  );
}

export default App;
