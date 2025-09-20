import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;