import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { APIDomain } from "../../utils/APIDomain";
import "./Login.css";

export default function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [showPassword,setShowPassword] = useState(false)
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)

const handleLogin = async(e)=>{
e.preventDefault()

if(!email) return setMessage("Email required")
if(!password) return setMessage("Password required")

setLoading(true)

try{

const res = await axios.post(`${APIDomain}/api/auth/login`,{
email,
password
})

localStorage.setItem("token",res.data.token)

navigate("/admin/dashboard")

}catch(err){

setMessage(err.response?.data?.error || "Login failed")

}

setLoading(false)
}

return(

<div className="auth-page">

<div className="auth-card">

<h2>Admin Login</h2>

{message && <p className="message">{message}</p>}

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<div className="password-box">

<input
type={showPassword ? "text" : "password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<span onClick={()=>setShowPassword(!showPassword)}>
{showPassword ? "Hide" : "Show"}
</span>

</div>

<button type="submit">
{loading ? "Logging in..." : "Login"}
</button>

</form>

<div className="auth-links">
<p>Don't have an account?</p>
<Link to="/register" className="link">Register</Link>
</div>

<div className="auth-links">
<Link to="/forgot-password" className="link">Forgot Password?</Link>
</div>

</div>

</div>

)
}