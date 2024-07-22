
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummery } from "./components/OrderSummery";
import { NotFound } from "./components/NotFound";
import Footer from "./components/Footer";


function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='service' element={<Service/>}></Route>
      <Route path='ordersummery' element={<OrderSummery/>}></Route>
      <Route path='service:localcities' element={<Service/>}></Route>
    </Routes>
    <Footer/>
  
    </>
  );
}

export default App;

