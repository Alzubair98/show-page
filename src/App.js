import "./App.css";
import MainPage from "./component/MainPage";

import Footer from "./component/footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 700,
});

function App() {
  return (
    <div className="App">
      <img className="background-img" src="logo.png" />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
