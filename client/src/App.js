import Login from "./components/admin/Login";
import SignUp from "./components/admin/SignUp";
import Dashboard from "./components/admin/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./components/admin/Product";
import AddProduct from "./components/admin/AddProduct";
import AdminDashboard from "./components/admin/AdminDashboard";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/Dashboard' element={<Dashboard />} >
            <Route path='/Dashboard' index element={<AdminDashboard/>}/>
            <Route path='/Dashboard/products' element={<Product />} />
            <Route path='/Dashboard/products/form' element={<AddProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;