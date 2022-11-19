import "./App.css";
import { Navbar } from "./components/UI/navbar/Navbar";
import Balls from "./components/background/balls/Balls";
import Main from "./components/UI/main/Main";
import Footer from "./components/UI/footer/Footer";
import Copyright from "./components/UI/footer/Copyright";

function App() {
  return (
    <div className="App">
      <Balls />
      <Navbar />
      <Main />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
