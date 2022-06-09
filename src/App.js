import Profile from "./Portfolio/Home/Profile";
import Navbar from './Portfolio/Navbar/Navbar';
import './App.css';
import Projects from "./Portfolio/Projects/Projects";
import Footer from "./Portfolio/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
