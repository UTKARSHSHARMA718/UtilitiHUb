import logo from "./logo.svg";
import { content } from "./Components/data";
import "./App.css";
import "./Components/GlobalStyle.css";
import "./Components/GlobalResponsiveStyle.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Facilities from "./Components/Facilities/Facilities";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
import SubFooter from "./Components/SubFooter/SubFooter";
import CallToAction from "./Components/CallToAction/CallToAction";
import Features from "./Components/Features/Features";
import Usecases from "./Components/UseCases/Usecases";
import { useState, createContext } from "react";

export const languageContext = createContext();
function App() {
  const [language, setLanguage] = useState(0);

  return (
    <languageContext.Provider value={{language,setLanguage}}>
      <div className="App">
        <Navbar />
        <Home />
        <Features />
        <Facilities />
        <Usecases />
        <Pricing />
        <CallToAction />
        <Footer />
        <SubFooter />
      </div>
    </languageContext.Provider>
  );
}

export default App;
