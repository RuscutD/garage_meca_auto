import React from "react";
import "./app.scss"
import NavBar from "../src/components/NavBar/NavBar";
import Page1 from "../src/components/P-1/Page1";
import Page2 from "../src/components/P-2/Page2";
import Page3 from "../src/components/P-3/Page3";
import Page4 from "../src/components/P-4/Page4";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="sections">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
