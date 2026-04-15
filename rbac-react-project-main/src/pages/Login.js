import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const [username,setUsername] = useState("");
const navigate = useNavigate();

const handleLogin = () => {

if(username === "admin"){
localStorage.setItem("role","admin");
navigate("/admin");
}
else{
localStorage.setItem("role","user");
navigate("/user");
}

};

return(
<div>
<h2>Login</h2>

<input
placeholder="Enter username"
onChange={(e)=>setUsername(e.target.value)}
/>

<br/><br/>

<button onClick={handleLogin}>Login</button>

</div>
);

}

export default Login;