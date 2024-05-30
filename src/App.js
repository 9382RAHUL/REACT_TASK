import logo from "./logo.svg";

// import Login from './components/Login';
import Page2 from "./components/Page2";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login title={"CANDIDATE LOGIN"} />} />

          <Route
            path="/page2"
            element={<Page2 title={"Language of Typing Test [Roll Number:"} />}
          />
          <Route
            path="/page3"
            element={<Page3 title={" Odia Typing - Roll No: 1048"} />}
          />
          <Route
            path="/page4"
            element={<Page4 title={" Odia Demo Typing -Roll No :1048"} />}
          />
          <Route
            path="/page5"
            element={<Page5 title={" Odia Typing Test"} />}
          />
          <Route path="/page6" element={<Page6 title={"Odia Typing "} />} />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Page2/> */}
    </div>
  );
}

export default App;
