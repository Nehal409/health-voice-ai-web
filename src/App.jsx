import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./css/fontawesome-all.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import "./css/swiper.css";
import Testimonial from "./components/Testimonial";
import Clients from "./components/Clients";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Clients />
      <Testimonial />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
