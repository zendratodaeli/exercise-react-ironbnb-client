import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentList"
import CreateApartment from "./components/CreateApartment";
import ApartmentDetails from "./components/ApartmentDetails";



function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <img src={ironhackersImg} alt="ironhackers" /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />}/>
        <Route path="/apartments/create" element={<CreateApartment />}/>
      </Routes>
    </div>
  );
}

export default App;
