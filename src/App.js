import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from './Pages/Signup/Signup';
import HomeSignUp from "./Pages/Home/HomeSignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardContent from "./Pages/Dashboard/DashboardContent";
import DashboardProfile from "./Pages/Dashboard/DashboardProfile";
import SupplierPendingorders from "./Pages/Orders/Supplier/SupplierPendingorders";
import SupplierPastOrders from "./Pages/Orders/Supplier/SupplierPastOrders";


function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/homesignup" element={<HomeSignUp />}/>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardContent />}/>
        <Route path="dashboardProfile" element={<DashboardProfile />}/>
        <Route path="supplierPending" element={<SupplierPendingorders />}/>
        <Route path="supplierPast" element={<SupplierPastOrders />}/>
      </Route>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
