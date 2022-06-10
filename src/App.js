import Profile from "./Portfolio/Home/Profile";
import Navbar from './Portfolio/Navbar/Navbar';
import './App.css';
import Projects from "./Portfolio/Projects/Projects";
import Footer from "./Portfolio/Footer/Footer";
import Contact from "./Portfolio/Contact/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
