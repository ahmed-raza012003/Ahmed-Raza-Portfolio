import { BrowserRouter } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />

        <div className='relative z-0'>
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />

          <StarsCanvas />
          <Footer />
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923048237137"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce group"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={30} className="group-hover:drop-shadow-[0_0_10px_white]" />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
