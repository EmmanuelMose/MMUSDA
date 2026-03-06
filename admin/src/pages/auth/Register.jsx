import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { APIDomain } from "../../utils/APIDomain";
import "./Register.css";

export default function Register(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirm,setConfirm] = useState("")
const [showPassword,setShowPassword] = useState(false)
const [showConfirm,setShowConfirm] = useState(false)
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)

const validatePassword = (pwd)=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pwd)

const handleSubmit = async(e)=>{
e.preventDefault()

if(!email) return setMessage("Email required")
if(!validatePassword(password)) return setMessage("Weak password")
if(password !== confirm) return setMessage("Passwords do not match")

setLoading(true)

try{

const res = await axios.post(`${APIDomain}/api/auth/register`,{
email,
password
})

setMessage(res.data.message)

}catch(err){

setMessage(err.response?.data?.error || "Registration failed")

}

setLoading(false)
}

return(

<div className="auth-page">

<div className="auth-card">

<h2>Register</h2>

{message && <p className="message">{message}</p>}

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<div className="password-box">

<input
type={showPassword ? "text":"password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<span onClick={()=>setShowPassword(!showPassword)}>
{showPassword ? "Hide":"Show"}
</span>

</div>

<div className="password-box">

<input
type={showConfirm ? "text":"password"}
placeholder="Confirm Password"
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
/>

<span onClick={()=>setShowConfirm(!showConfirm)}>
{showConfirm ? "Hide":"Show"}
</span>

</div>

<button type="submit">
{loading ? "Registering..." : "Register"}
</button>

</form>

<div className="auth-links">
<p>Already have an account?</p>
<Link to="/login" className="link">Login</Link>
</div>

</div>

</div>

)
}