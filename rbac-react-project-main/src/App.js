import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./ProtectedRoute";

function App(){
return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/admin" element={
<ProtectedRoute role="admin">
<Admin/>
</ProtectedRoute>
}/>

<Route path="/user" element={
<ProtectedRoute role="user">
<User/>
</ProtectedRoute>
}/>

<Route path="/unauthorized" element={<Unauthorized/>}/>

</Routes>

</BrowserRouter>
)
}

export default App;