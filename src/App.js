import "./App.css";

import Balls from "./components/background/balls/Balls";
import Main from "./components/layouts/main/Main";

import Copyright from "components/layouts/footer/Copyright";
import { Navbar } from "components/layouts/navbar/Navbar";
import Footer from "components/layouts/footer/Footer";

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
