import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";
import DeleteItem from "./components/DeleteItem";
import ShopList from "./components/ShopList";
import ItemBin from "./components/ItemBin";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
      </>
      <Routes>
        <Route path="/" element={<ShopList />} />
        <Route path="/new" element={<NewItem />} />
        <Route path="/edit/:itemId" element={<EditItem />} />
        <Route path="/delete/:itemId" element={DeleteItem />} />
        <Route path="/bin" element={<ItemBin />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
