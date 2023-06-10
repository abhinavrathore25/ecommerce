import Login from "./components/admin/Login";
import CustomerDashboard from "./components/admin/CustomerDashboard";
import CustomerLogIn from "./components/admin/CustomerLogIn";
import Registeration from "./components/admin/Registeration";
import { useState } from "react";

function App() {

    const [isLoggedIn, setisLoggedIn] = useState(true);

    return (
        <div className="App">
            {/* <CustomerDashboard /> */}
            {/* <CustomerLogIn/> */}
            <Registeration/>
            {
                !isLoggedIn && <Login />
            }
        </div>
    );
}

export default App;