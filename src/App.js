import "./styles.css";
import CardList from "./components/CardList";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </div>
  );
}