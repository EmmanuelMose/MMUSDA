import { useState } from "react";
import { createHomeChurch } from "../../Features/homechurches/homechurchesAPI";
import "./CreateHomeChurch.css";

export default function CreateHomeChurch({onSuccess}){

const [name,setName] = useState("");
const [leaderName,setLeaderName] = useState("");
const [leaderContact,setLeaderContact] = useState("");
const [location,setLocation] = useState("");
const [description,setDescription] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
try{
await createHomeChurch({name,leaderName,leaderContact,location,description});
setName(""); setLeaderName(""); setLeaderContact(""); setLocation(""); setDescription("");
onSuccess();
}catch(err){ console.log(err); }
};

return(
<div className="create-homechurch">
<h2>Create Home Church</h2>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required/>
<input type="text" placeholder="Leader Name" value={leaderName} onChange={e=>setLeaderName(e.target.value)} />
<input type="text" placeholder="Leader Contact" value={leaderContact} onChange={e=>setLeaderContact(e.target.value)} />
<input type="text" placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} />
<input type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
<button type="submit">Create</button>
</form>
</div>
);
}