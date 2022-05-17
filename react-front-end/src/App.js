import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./components/Home";
import NewItem from "./components/NewItem";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewItem />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
