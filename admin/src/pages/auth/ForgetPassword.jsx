import { useState } from "react";
import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";
import "./ForgetPassword.css";

export default function ForgetPassword(){

const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)

const handleSubmit = async(e)=>{

e.preventDefault()

if(!email) return setMessage("Email required")

setLoading(true)

try{

const res = await axios.post(`${APIDomain}/api/auth/forgot-password`,{email})

setMessage(res.data.message)

setTimeout(()=>window.location.href=`/reset-code?email=${email}`,1500)

}catch(err){

setMessage(err.response?.data?.error || "Error")

}

setLoading(false)

}

return(

<div className="auth-page">

<div className="auth-card">

<h2>Forgot Password</h2>

{message && <p className="message">{message}</p>}

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Registered Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button type="submit">
{loading ? "Sending..." : "Send Reset Code"}
</button>

</form>

</div>

</div>

)
}