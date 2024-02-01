import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RoutesIndex from "@/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
