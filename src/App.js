//import logo from "./logo.svg";
//import "./App.css";
import "./categories.styles.scss";
//import imgs from "./categories";
import Home from "./componets/routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./componets/routes/navigation/navigation.component";
import Tour from "./componets/routes/tours/tour.component";
import Checkout from "./componets/routes/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="tour" element={<Tour />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
