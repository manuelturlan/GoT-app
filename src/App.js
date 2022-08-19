import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Houses from "./components/Houses/Houses.jsx";
import HouseCreator from "./components/HouseCreator/HouseCreator.jsx";
import HouseDetail from "./components/HouseDetail/HouseDetail";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Houses></Houses>}></Route>
        <Route
          path="/house/:houseId"
          element={<HouseDetail></HouseDetail>}
        ></Route>
        <Route
          path="/house/create"
          element={<HouseCreator></HouseCreator>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
