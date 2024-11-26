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
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";
import { useState } from "react";
function App() {

  const [startTime, setStartTime] = useState(null); 

  useEffect(() => {
    const enterTime = Date.now();
    setStartTime(enterTime);

    console.log("Visitor entered squeeze page at:", new Date(enterTime).toISOString());

    return () => {
      const leaveTime = Date.now();
      if (startTime) {
        const durationInMinutes = (leaveTime - startTime) / 60000; // Time in minutes
        console.log(`Visitor spent ${durationInMinutes.toFixed(2)} minutes on squeeze page.`);

        // Log the event to Firebase Analytics
        logEvent(analytics, 'Duration_SqueezePage', {
          duration_minutes: durationInMinutes.toFixed(2), // Rounded to 2 decimal places
          start_time: new Date(startTime).toISOString(),
          end_time: new Date(leaveTime).toISOString(),
        });
      }
    };
  }, [startTime]);
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
