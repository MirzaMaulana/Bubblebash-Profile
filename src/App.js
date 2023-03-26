import "./App.css";
import Header from "./includes/Header";
import Service from "./includes/Service";
import Project from "./includes/Project";
import Testimoni from "./includes/Testimoni";
import Contact from "./includes/Contact";
import Footer from "./includes/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <Project />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
